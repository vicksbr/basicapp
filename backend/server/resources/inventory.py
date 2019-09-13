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

    return inventory_blueprint
