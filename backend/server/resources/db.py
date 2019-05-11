from flask import Blueprint, render_template, jsonify
from server.models.subject import Subject, subject_populate


def create_db_blueprint(debug):
    db_blueprint = Blueprint("db_blueprint", __name__)

    @db_blueprint.route("/populate")
    def populate_db():
        subject_populate()
        code = '200'
        response = jsonify({'response': 'banco populado'})

        return response, code
    
    @db_blueprint.route("/clear")
    def clean_db():
        Subject.drop_collection()
        code = '200'
        response = jsonify({'response': 'banco deletado'})

        return response, code

    return db_blueprint
