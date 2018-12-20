from flask import Flask, session
from flask_cors import CORS
from .database import init_db


def create_app(config, debug):
    app = Flask(
        __name__,
        template_folder="backend/server/template",
        static_folder="backend/server/template")
    connection = init_db(config)
    app.secret_key = config["APP"]["SECRET_KEY"]
    CORS(app)

    return app
