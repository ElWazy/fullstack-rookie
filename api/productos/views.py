from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from productos import docs
from productos.requests import POSTProductoRequest
from productos.responses import ListarProductoResponse
from productos.services.crear_producto import crear_producto
from productos.services.obtener_productos import obtener_productos


@docs.get_productos
@api_view(["GET"])
def get_productos(request):
    productos = obtener_productos()
    response_serializer = ListarProductoResponse(productos, many=True)
    return Response(
        data={"productos": response_serializer.data}, status=status.HTTP_200_OK
    )

@docs.get_productos2
@api_view(["GET"])
def get_productos2(request):
    return Response(
        data={"mensaje":" Holaaa"},status=status.HTTP_200_OK
    )


@docs.post_producto
@api_view(["POST"])
def post_producto(request):
    serializer = POSTProductoRequest(data=request.data)
    serializer.is_valid(raise_exception=True)
    nuevo_producto = serializer.validated_data

    crear_producto(
        nombre=nuevo_producto.get("nombre"),
        precio_unitario=nuevo_producto.get("precio_unitario"),
    )
    return Response(status=status.HTTP_201_CREATED)
