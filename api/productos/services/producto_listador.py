from productos.models import Producto


class ProductoListador:
    def listar(self):
        return Producto.objects.all()
