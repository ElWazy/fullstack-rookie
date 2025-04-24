from django.urls import path

from productos import views

urlpatterns = [
    path("", views.get_productos, name="productos.listar"),
    path("crear/", views.post_producto, name="productos.crear"),
]
