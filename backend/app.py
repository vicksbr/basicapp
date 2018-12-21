from flask import Flask, render_template, jsonify, request, Blueprint
from server.models.client import *
from server.config import config
from server import create_app

debug = __name__ == '__main__'

app = create_app(config, debug)

if __name__ == '__main__':
    app.run(debug=debug, port=5000)
