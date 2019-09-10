import mongoengine as me


class Product(me.Document):
    sku = me.StringField(required=True, unique=True)
    prod_type = me.StringField(required=True)
    title = me.StringField(default="")
    description = me.StringField(default="")
    asn = me.StringField(default="")
