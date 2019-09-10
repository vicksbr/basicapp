from mongoengine import Document, StringField, EmbeddedDocumentListField


class Client(Document):
    name = StringField(required=True, unique=True)
    scripts = EmbeddedDocumentListField('Script')

    def to_dict(self):
        return {
            'name': self.name,
        }
