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
        'sku': 'sku100',
        'prod_type': 'doce',
        'title': 'Pudim',
        'description': (
            "Sobremesa de consistência cremosa, á base de chocolate. frutas etc.. "
            "Preparada com leite, leite condensado e ovos e assada cozida em banho maria"
            "em calda de açucar queimado"
        ),
        'pricing': 100

    },
    {
        'sku': 'sku200',
        'prod_type': 'salgado',
        'title': 'Pão',
        'description': (
            "alimento feito com farinha, esp. de trigo, amassada com água e fermento"
            "e assado ao forno."
        ),
        'pricing': 50

    },
    {
        'sku': 'sku300',
        'prod_type': 'salgado',
        'title': 'Esfiha Carne Moida',
        'description': (
            "alimento feito com farinha, esp. de trigo, amassada com água e fermento"
            "e assado ao forno e recheado com carne moida de alta qualidade"
        ),
        'pricing': 10

    },

]

my_carts = [
    {
        'cart_id': 'cart_id_1',
        'last_modified': time_now,
        'status': 'active',
        'items': [
            {
                'sku': 'sku200',
                'qty': 2,
                'item_details': 'details_sku2'
            }
        ]
    },
    {
        'cart_id': 'cart_id_2',
        'last_modified': time_now,
        'status': 'active',
        'items': [
            {
                'sku': 'sku200',
                'qty': 5,
                'item_details': 'details_sku2'
            }
        ]
    }
]

my_inventory = [
    {
        '_id': 'sku100',
        'qty': 100,
        'carted': []

    },
    {
        '_id': 'sku200',
        'qty': 93,
        'carted': [
            {'cart_id': 'cart_id_1', 'qty': 2, 'timestamp': time_now},
            {'cart_id': 'cart_id_2', 'qty': 5, 'timestamp': time_now},
        ]

    },
    {
        '_id': 'sku300',
        'qty': 50,
        'carted': []
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
