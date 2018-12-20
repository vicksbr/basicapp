from mongoengine import Document, StringField, EmbeddedDocumentListField
from .script import Script


class Client(Document):
    name = StringField(required=True, unique=True)
    scripts = EmbeddedDocumentListField('Script')

    def to_dict(self):
        return {
            'name': self.name,
            'scripts':
            {script.name: script.to_dict()
             for script in self.scripts}
        }
