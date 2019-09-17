
from flask import Blueprint, render_template


def create_index_blueprint(debug, session, gtm):
    index_blueprint = Blueprint("index_blueprint", __name__)

    @index_blueprint.route("/")
    def index():
        return render_template("index.html", debug=debug, session=session, gtm=gtm)

    return index_blueprint
