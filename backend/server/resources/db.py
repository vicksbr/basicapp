from flask import Blueprint, render_template, jsonify


def create_db_blueprint(debug):
    db_blueprint = Blueprint("db_blueprint", __name__)

    @db_blueprint.route("/healthcheck")
    def healthcheck():        
        code = '200'
        response = jsonify({'response': 'alive'})

        return response, code

    return db_blueprint
