from productos.models import Producto


class ProductoCreador:
    def crear(self, nombre: str, precio_unitario: float) -> None:
        nuevo_producto = Producto(nombre=nombre, precio_unitario=precio_unitario)
        nuevo_producto.save()
