from flask import Flask, render_template, jsonify, request, Blueprint
from flask_mongoengine import MongoEngine
import json
from backend.models.client import *

debug = __name__ == '__main__'

db = MongoEngine()

app = Flask(__name__, template_folder="ui/template", static_folder="ui/dist")
app.config['MONGODB_DB'] = 'dbteste-raccoon'
app.config['MONGODB_HOST'] = 'ds127443.mlab.com'
app.config['MONGODB_PORT'] = 27443
app.config['MONGODB_USERNAME'] = 'pedropuzzi'
app.config['MONGODB_PASSWORD'] = 'teste12'
db.init_app(app)


@app.route('/')
def index():
    return render_template('index.html', debug=debug)


@app.route('/add', methods=['GET', 'POST'])
def add():
    script_exemplo_1 = Script("ScriptExemplo 1")
    script_exemplo_2 = Script("ScriptExemplo 2")
    if request.method == "POST":
        data = request.get_json()
        name = data["name"]
        new_client = Client(name, [script_exemplo_1, script_exemplo_2])
        new_client.save()
    elif request.method == "GET":
        print("tentei dar um get")
    else:
        print("tentei outra coisa")
    response = new_client.to_dict()
    return json.dumps(response)


@app.route('/clients/')
def listClients():
    clients = Client.objects.all()
    if clients:
        response = jsonify({
            'clients': {client.name: client.to_dict()
                        for client in clients}
        })
        httpcode = 200
    else:
        response = jsonify({'clients': 'clients not found'})
        httpcode = 202
    return response, httpcode


@app.route('/clear/')
def cleanDB():
    Client.drop_collection()
    return '200'


if __name__ == '__main__':
    app.run(debug=debug, port=5000)
