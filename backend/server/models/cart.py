import mongoengine as me


class Cart(me.Document):
    cart_id = me.StringField(primary_key=True)
    status = me.StringField(required=True)
    last_modified = me.DateTimeField()
    items = me.ListField(default=[])
