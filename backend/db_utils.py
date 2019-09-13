from datetime import datetime
import mongoengine as me
from server.database import init_db
from server.config import config
from server.models.product import Product
from server.models.inventory import Inventory
from server.models.cart import Cart

time_now = datetime.now()

my_products = [
    {
        'sku': 'sku1',
        'prod_type': 'doce',
        'title': 'Pudim',
        'description': (
            "Sobremesa de consistência cremosa, á base de chocolate. frutas etc.. "
            "Preparada com leite, leite condensado e ovos e assada cozida em banho maria"
            "em calda de açucar queimado"
        ),
        'pricing': 5000

    },
    {
        'sku': 'sku2',
        'prod_type': 'salgado',
        'title': 'Pão',
        'description': (
            "alimento feito com farinha, esp. de trigo, amassada com água e fermento"
            "e assado ao forno."
        ),
        'pricing': 15000

    },
]

my_carts = [
    {
        'cart_id': '1',
        'last_modified': time_now,
        'status': 'active',
        'items': [
            {
                'sku': 'sku1',
                'qty': 3,
                'item_details': 'details_sku1'
            },
            {
                'sku': 'sku2',
                'qty': 2,
                'item_details': 'details_sku2'
            }
        ]
    },
    {
        'cart_id': '2',
        'last_modified': time_now,
        'status': 'active',
        'items': [
            {
                'sku': 'sku1',
                'qty': 5,
                'item_details': 'details_sku1'
            },
            {
                'sku': 'sku2',
                'qty': 15,
                'item_details': 'details_sku2'
            }
        ]
    }
]

my_inventory = [
    {
        '_id': 'sku1',
        'qty': 100,
        'carted': [
            {'cart_id': '1', 'qty': 3, 'timestamp': time_now},
            {'cart_id': '2', 'qty': 5, 'timestamp': time_now},
        ]

    },
    {
        '_id': 'sku2',
        'qty': 200,
        'carted': [
            {'cart_id': '1', 'qty': 2, 'timestamp': time_now},
            {'cart_id': '2', 'qty': 15, 'timestamp': time_now},
        ]

    }
]


def db_utils():
    mongo_conn = init_db(config)

    Product.drop_collection()

    for p in my_products:
        product = Product(**p)
        product.save()

    Cart.drop_collection()

    for c in my_carts:
        cart = Cart(**c)
        cart.save()

    Inventory.drop_collection()

    for i in my_inventory:
        inventory = Inventory(**i)
        inventory.save()


if __name__ == "__main__":
    db_utils()
