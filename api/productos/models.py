from decimal import Decimal

from django.db import models


class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    precio_unitario = models.DecimalField(max_digits=10, decimal_places=2)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)

    def precio_iva(self) -> Decimal:
        return self.precio_unitario * Decimal("1.19")

    def __str__(self):
        return self.nombre
