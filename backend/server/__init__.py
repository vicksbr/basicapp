from flask import Flask, session
from .database import init_db
from .resources.index import create_index_blueprint
from .resources.db import create_db_blueprint


def create_app(config, debug):
    app = Flask(__name__)
    connection = init_db(config)
    app.secret_key = config["APP"]["SECRET_KEY"]

    index = create_index_blueprint(debug)    
    db = create_db_blueprint(debug)
    
    app.register_blueprint(index, url_prefix="/")    
    app.register_blueprint(db, url_prefix="/api/db")
    
    return app
