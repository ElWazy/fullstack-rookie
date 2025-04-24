voy a hacer una tienda simple, con

# el front

en react

- [ ] lista los productos con el precio formateado (ej: $5.990)
    - agrega el $ al principio del precio
    - pone los puntos como separador de miles
- [ ] crea un producto
    - con un formulario no controlado

# la api

con 2 rutas
- [ ] listar productos
    - al listar, el precio que se muestra es precio neto (bruto + iva)
- [ ] crear un producto
    - se crea el producto con el precio bruto

el producto tiene:
nombre
precio bruto

# iniciar los proyectos

## api en python + django

si ocupas uv
```bash
uv sync
uv run manage.py migrate
uv run manage.py runserver
```

si ocupas pip
```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt # se me olvidó generar el requirements.txt con uv
python manage.py migrate
python manage.py runserver
```

## web en node.js + react

```bash
npm i
npm run dev
```
