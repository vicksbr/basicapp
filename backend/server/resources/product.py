import json
from flask import Blueprint
from server.models.product import Product


def create_product_blueprint(debug):
    product_blueprint = Blueprint("product_blueprint", __name__)

    @product_blueprint.route("/", methods=['GET'])
    def find_all():
        products = Product.objects.all().to_json()

        if not products:
            return json.dumps({})

        return products

    @product_blueprint.route("/<string:sku>", methods=['GET'])
    def find_one(sku: str):
        product = Product.objects.get(sku=sku).to_json()

        if not product:
            return "No Product"

        return product

    return product_blueprint
