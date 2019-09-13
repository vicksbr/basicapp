import mongoengine as me


class Product(me.Document):
    sku = me.StringField(primary_key=True)
    prod_type = me.StringField(required=True)
    title = me.StringField(default="")
    description = me.StringField(default="")
    pricing = me.FloatField(defaults=0.0)
