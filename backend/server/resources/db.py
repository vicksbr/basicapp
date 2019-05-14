from flask import Blueprint, render_template, jsonify, json, request
from server.models.subject import Subject, subject_populate
import requests

def create_db_blueprint(debug):
    db_blueprint = Blueprint("db_blueprint", __name__)

    @db_blueprint.route("/populate")
    def populate_db():
        subject_populate()
        code = '200'
        response = jsonify({'response': 'banco populado'})

        return response, code
    
    @db_blueprint.route("/clear")
    def clean_db():
        Subject.drop_collection()
        code = '200'
        response = jsonify({'response': 'banco deletado'})

        return response, code

    @db_blueprint.route("/subject", methods=['GET'])
    def get_subjects():
        subjects = Subject.objects.only('brief_description','long_description','tags')
        if subjects:            
            response = jsonify(json.loads(subjects.to_json()))
            httpcode = 200
        else:
            response = jsonify({})
            httpcode = 200

        return response, httpcode
    
    @db_blueprint.route("/subject", methods=['POST'])
    def post_subject():
        data = request.get_json()
                        
        if not all([ data.get('brief_description'), data.get('long_description'), data.get('tags') ]):
            response = {'response':'missing fields on post request'}
            httpcode = 400
            return jsonify(response), httpcode
                
        subject = Subject(
            brief_description=data['brief_description'],
            long_description=data['long_description'],
            tags=data['tags'],
        )
        try:
            subject.save()
        except Exception as e:    
            return "Error \n %s" % (e)
        
        response = {'response':'created'}
        httpcode= 200
        
        return jsonify(response), httpcode
    
    return db_blueprint
