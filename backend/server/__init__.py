from flask import Flask, session
from flask_cors import CORS
from .database import init_db
from .resources.index import create_index_blueprint


def create_app(config, debug):
    app = Flask(__name__)
    connection = init_db(config)
    app.secret_key = config["APP"]["SECRET_KEY"]

    index = create_index_blueprint(debug)

    app.register_blueprint(index, url_prefix="/")
    CORS(app)

    return app
