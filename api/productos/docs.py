from drf_spectacular.utils import extend_schema

from productos.requests import POSTProductoRequest

get_productos = extend_schema(
    description="Listar productos",
    summary="Listar productos",
    tags=["Productos"],
)

get_productos2 = extend_schema(
    description="Saludo",
    summary="Saludo",
    tags=["Productos"],
)

post_producto = extend_schema(
    description="Crear producto",
    summary="Crear producto",
    tags=["Productos"],
    request=POSTProductoRequest,
)