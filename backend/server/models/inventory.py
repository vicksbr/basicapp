import mongoengine as me


class Inventory(Document):
    sku = me.StringField(required=True)
    qty = me.IntField(default=0)
    carted = me.ListField(defaukt=[])
