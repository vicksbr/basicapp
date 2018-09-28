from flask import Flask, render_template
from flask_mongoengine import MongoEngine
from mongoengine import *

debug = __name__ == '__main__'

db = MongoEngine()

app=Flask(__name__,template_folder="ui/template")
app.config['MONGODB_DB'] = 'dbteste-raccoon'
app.config['MONGODB_HOST'] = 'ds127443.mlab.com'
app.config['MONGODB_PORT'] = 27443
app.config['MONGODB_USERNAME'] = 'pedropuzzi'
app.config['MONGODB_PASSWORD'] = 'teste12'
db.init_app(app)

class Client(db.Document):
    name = StringField(required=True)
    scritps = ListField(StringField())

class Script(db.Document):
    name = StringField(required=True)

x = Client("pedro",["um","dois","tres"])
x.save()
x = Client("jose",["um","dois","tres"])
x.save()
x = Client("maria",["um","dois","tres"])
x.save()
@app.route('/')
def index():
    return render_template('index.html',debug=debug)

if __name__ == '__main__':  
    app.run(debug=debug, port=5000)
