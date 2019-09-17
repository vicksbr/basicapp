import json
from flask import Blueprint
from server.models.inventory import Inventory


def create_inventory_blueprint(debug):
    inventory_blueprint = Blueprint("inventory_blueprint", __name__)

    @inventory_blueprint.route("/", methods=['GET'])
    def find_all():
        inventorys = Inventory.objects.all().to_json()

        if not inventorys:
            return json.dumps({})

        return inventorys

    @inventory_blueprint.route("/<string:sku>", methods=['GET'])
    def find_one(sku: str):
        inventory = Inventory.objects.get(sku=sku).to_json()

        if not inventory:
            return "No inventory"

        return inventory

    @inventory_blueprint.route("/<string:timeout>/cleanup", methods=['GET'])
    def cleanup_inventory(timeout):
        now = datetime.utcnow()
        threshold = now - timedelta(seconds=timeout)
        cart_coll = Cart._get_collection()
        inventory_coll = Inventory._get_collection()
        # Find all the expiring carted items
        for item in inventory_coll.find(
                {'carted.timestamp': {'$lt': threshold}}):

            # Find all the carted items that matched
            carted = dict(
                (carted_item['cart_id'], carted_item)
                for carted_item in item['carted']
                if carted_item['timestamp'] < threshold)

            # First Pass: Find any carts that are active and refresh the carted items
            for cart in cart_coll.find(
                {'_id': {'$in': carted.keys()},
                 'status': 'active'}):
                cart = carted[cart['_id']]

                inventory_coll.update(
                    {'_id': item['_id'],
                     'carted.cart_id': cart['_id']},
                    {'$set': {'carted.$.timestamp': now}})
                del carted[cart['_id']]

            # Second Pass: All the carted items left in the dict need to now be
            #    returned to inventory
            for cart_id, carted_item in carted.items():
                inventory_coll.update(
                    {'_id': item['_id'],
                     'carted.cart_id': cart_id,
                     'carted.qty': carted_item['qty']},
                    {'$inc': {'qty': carted_item['qty']},
                     '$pull': {'carted': {'cart_id': cart_id}}})

    return inventory_blueprint
