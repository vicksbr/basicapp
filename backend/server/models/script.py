from mongoengine import Document, StringField


class Script(Document):
    name = StringField(required=True, unique=True)

    def to_dict(self):
        return {'name': self.name}
