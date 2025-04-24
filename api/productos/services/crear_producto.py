from productos.models import Producto


def crear_producto(nombre: str, precio_unitario: float) -> None:
    nuevo_producto = Producto(nombre=nombre, precio_unitario=precio_unitario)
    nuevo_producto.save()
