import mongoengine as me


class Cart(document):
    cart_id = me.StringField(required=True, unique=True)
    status = me.StringField(required=True)
    last_modified = me.DateField()
