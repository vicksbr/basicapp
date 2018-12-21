from flask import Blueprint, render_template, jsonify
from server.models.client import Client


def create_db_blueprint(debug):
    db_blueprint = Blueprint("db_blueprint", __name__)

    @db_blueprint.route("/clear")
    def cleanDB():
        Client.drop_collection()
        code = '200'
        response = jsonify({'response': 'banco deletado'})

        return response, code

    return db_blueprint
