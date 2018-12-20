from mongoengine import connect
from backend.server.config import config


def init_db(config):
    connection = connect(**config["DB"])
    return connection
