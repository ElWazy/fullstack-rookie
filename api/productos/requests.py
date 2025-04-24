from rest_framework import serializers

from productos.models import Producto


class POSTProductoRequest(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = ["nombre", "precio_unitario"]
