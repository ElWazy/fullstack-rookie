from drf_spectacular.utils import extend_schema

from productos.requests import POSTProductoRequest

get_productos = extend_schema(
    description="Listar productos",
    summary="Listar productos",
    tags=["Productos"],
)

post_producto = extend_schema(
    description="Crear producto",
    summary="Crear producto",
    tags=["Productos"],
    request=POSTProductoRequest,
)