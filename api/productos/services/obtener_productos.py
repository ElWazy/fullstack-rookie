from productos.models import Producto


def obtener_productos():
    return Producto.objects.all()
