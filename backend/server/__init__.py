from flask import Flask, session
from .database import init_db
from .resources.index import create_index_blueprint
from .resources.clients import create_client_blueprint
from .resources.db import create_db_blueprint
from .resources.product import create_product_blueprint
from .resources.cart import create_cart_blueprint
from .resources.inventory import create_inventory_blueprint


def create_app(config, debug):
    app = Flask(__name__)
    connection = init_db(config)
    app.secret_key = config["APP"]["SECRET_KEY"]

    index = create_index_blueprint(debug, session, config['GTM'])
    clients = create_client_blueprint(debug)
    db = create_db_blueprint(debug)
    products = create_product_blueprint(debug)
    cart = create_cart_blueprint(debug)
    inventory = create_inventory_blueprint(debug)

    app.register_blueprint(index, url_prefix="/")
    app.register_blueprint(clients, url_prefix="/api/clients")
    app.register_blueprint(db, url_prefix="/api/db")
    app.register_blueprint(products, url_prefix="/api/product")
    app.register_blueprint(cart, url_prefix="/api/cart")
    app.register_blueprint(inventory, url_prefix="/api/inventory")

    return app
