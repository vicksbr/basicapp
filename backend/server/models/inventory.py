import mongoengine as me
from server.models.cart import Cart


class Inventory(me.Document):
    _id = me.StringField(primary_key=True)
    qty = me.IntField(default=0)
    carted = me.ListField(default=[])
