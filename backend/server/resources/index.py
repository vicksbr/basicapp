
from flask import Blueprint, render_template


def create_index_blueprint(debug):
    index_blueprint = Blueprint("index_blueprint", __name__)

    @index_blueprint.route("/")
    def index():
        return render_template("index.html", debug=debug)

    return index_blueprint
