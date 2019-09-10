import json
from flask import Blueprint, render_template, request
from server.models.product import Product


def create_product_blueprint(debug):
    product_blueprint = Blueprint("product_blueprint", __name__)

    @product_blueprint.route("/", methods=['GET'])
    def listProducts():
        products = Product.objects.all()

        products = [
            {
                'sku': 1,
                'title': 'Tenis muito feioso',
            },
            {
                'sku': 2,
                'title': 'Sapatenis horrendo',
            },
            {
                'sku': 3,
                'title': 'Chinelo Rider da moda',
            }
        ]

        if not products:
            return ""

        return json.dumps(products)

    @product_blueprint.route("/", methods=['POST'])
    def addProduct():
        pass

    return product_blueprint
