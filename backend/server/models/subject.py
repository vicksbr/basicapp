import mongoengine as mongo
import random as ra

class Subject(mongo.Document):
    brief_description = mongo.StringField()
    tags = mongo.ListField(mongo.StringField())
    long_description = mongo.StringField()    
    
    meta = { 
        'indexes': [
            'tags'
        ]
    }

def subject_creator(subject_dict):
    return Subject(
        brief_description=subject_dict['brief_description'],                    
        long_description=subject_dict['long_description'],
        tags=subject_dict['tags']        
    )

def subject_creator_lorem():
    
    tags_array = ['programming', 'python','javascript','react','redux','mongo','life','health','learning']
    lorem_long_text = "Lorem ipsum eh uma coisa super legal demais da conta"    
    lorem_brief_text = 'Brief lorem'

    random_tags = ra.sample(tags_array,3)
    
    subject_dict = {             
        'brief_description' : lorem_brief_text,        
        'long_description': lorem_long_text,
        'tags': random_tags
    }

    lorem_subject = subject_creator(subject_dict)

    return lorem_subject


def subject_create_array_documents():
    subjects = []
    for i in range(0,9):
        subjects = [*subjects,subject_creator_lorem()]
    return subjects


def subject_populate():
    subjects = subject_create_array_documents()
    
    for subject in subjects:
        Subject.save(subject)

