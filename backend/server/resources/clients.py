from flask import Blueprint, render_template, jsonify, request
from server.models.client import Client
from server.models.script import Script
import json


def create_client_blueprint(debug):
    client_blueprint = Blueprint("client_blueprint", __name__)

    @client_blueprint.route("/")
    def listClients():
        clients = Client.objects.all()
        if clients:
            response = jsonify({
                'clients':
                {client.name: client.to_dict()
                 for client in clients}
            })
            httpcode = 200
        else:
            response = jsonify({'clients': 'clients not found'})
            httpcode = 202

        return response, httpcode

    @client_blueprint.route('/add', methods=['GET', 'POST'])
    def add():
        script_exemplo_1 = Script("ScriptExemplo 1")
        script_exemplo_2 = Script("ScriptExemplo 2")
        if request.method == "POST":
            data = request.get_json()
            name = data["name"]
            new_client = Client(name, [script_exemplo_1, script_exemplo_2])
            new_client.save()
            httpcode = 201
        elif request.method == "GET":
            print("tentei dar um get")
            httpcode = 200
        else:
            print("tentei outra coisa")
            httpcode = 200
        response = new_client.to_dict()

        return json.dumps(response), httpcode

    return client_blueprint
