from rest_framework import serializers

from productos.models import Producto


class ListarProductoResponse(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = ["id", "nombre", "precio_iva", "fecha_creacion"]
