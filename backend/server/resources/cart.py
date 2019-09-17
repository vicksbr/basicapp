import json
from flask import Blueprint
from server.models.cart import Cart
from server.models.inventory import Inventory
from datetime import datetime
from .utils import collect_payment


def create_cart_blueprint(debug):
    cart_blueprint = Blueprint("cart_blueprint", __name__)

    @cart_blueprint.route("/", methods=['GET'])
    def find_all():
        carts = Cart.objects.all().to_json()

        if not carts:
            return json.dumps({})

        return carts

    @cart_blueprint.route("/<string:cart_id>", methods=['GET'])
    def find_one(cart_id: str):
        cart = Cart.objects.get(cart_id=cart_id).to_json()

        if not cart:
            return "cart inexistent"

        return cart

    @cart_blueprint.route("/<string:cart_id>/<string:sku>/<int:qty>/<string:details>", methods=['POST'])
    def add_item_to_cart(cart_id: str, sku: str, qty: float, details='details'):
        now = datetime.now()

        cart_coll = Cart._get_collection()
        inventory_coll = Inventory._get_collection()

        # Make sure the cart is still active and add the line item
        result = cart_coll.update(
            {'_id': cart_id, 'status': 'active'},
            {'$set': {'last_modified': now},
             '$push': {'items': {'sku': sku, 'qty': qty, 'details': details}}},
            w=1
        )
        if not result['updatedExisting']:
            raise Exception('Cart inactive')

        result = inventory_coll.update(
            {'_id': sku, 'qty': {'$gte': qty}},
            {'$inc': {'qty': -qty},
             '$push': {'carted': {'qty': qty, 'cart_id': cart_id, 'timestamp': now}}},
            w=1)

        if not result['updatedExisting']:
            # Roll back our cart update
            cart_coll.update(
                {'_id': cart_id},
                {'$pop': {'items': 1}})
            raise Exception('Could not update cart')

        return json.dumps(result)

    @cart_blueprint.route("/<string:cart_id>/<string:sku>/<int:old_qty>/<int:new_qty>", methods=['PUT'])
    def update_quantity(cart_id, sku, old_qty, new_qty):
        cart_coll = Cart._get_collection()
        inventory_coll = Inventory._get_collection()

        now = datetime.utcnow()
        delta_qty = new_qty - old_qty

        # Make sure the cart is still active and add the line item
        result = cart_coll.update(
            {'_id': cart_id, 'status': 'active', 'items.sku': sku},
            {'$set': {'last_modified': now, 'items.$.qty': new_qty}},
            w=1
        )
        if not result['updatedExisting']:
            raise Exception('Cart inactive')

        # Update the inventory
        result = inventory_coll.update(
            {'_id': sku, 'carted.cart_id': cart_id, 'qty': {'$gte': delta_qty}},
            {'$inc': {'qty': -delta_qty},
             '$set': {'carted.$.qty': new_qty, 'timestamp': now}},
            w=1
        )
        if not result['updatedExisting']:
            # Roll back our cart update
            cart_coll.update(
                {'_id': cart_id, 'items.sku': sku},
                {'$set': {'items.$.qty': old_qty}})
            raise Exception('Could not update cart')

        return json.dumps(result)

    @cart_blueprint.route("/<string:cart_id>/checkout", methods=['POST'])
    def checkout(cart_id):
        now = datetime.utcnow()
        cart_coll = Cart._get_collection()

        # Make sure the cart is still active and set to 'pending'. Also
        #     fetch the cart details so we can calculate the checkout price
        cart = cart_coll.find_and_modify(
            {'_id': cart_id, 'status': 'active'},
            update={'$set': {'status': 'pending', 'last_modified': now}})
        if cart is None:
            raise Exception('Cart Inactive')

        print(cart)

        # Validate payment details; collect payment
        try:
            collect_payment(cart)
            db.cart.update({'_id': cart_id}, {'$set': {'status': 'complete'}})
            db.inventory.update(
                {'carted.cart_id': cart_id},
                {'$pull': {'cart_id': cart_id}},
                multi=True
            )
        except:
            db.cart.update({'_id': cart_id}, {'$set': {'status': 'active'}})
            raise Exception('Problems with checkout')

        return json.dumps({'checkout': 'sucessful'})

    return cart_blueprint
