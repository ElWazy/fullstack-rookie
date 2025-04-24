import { postProducto } from '../services/postProducto';

export function CrearProducto() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nombre = formData.get('nombre') as string;
    const precio_unitario = parseFloat(formData.get('precio') as string);

    if (!nombre || isNaN(precio_unitario)) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    const productoCreado = await postProducto({ nombre, precio_unitario });
    console.log('Producto creado:', productoCreado);
  };

  return (
    <div>
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div>
          <label htmlFor="precio">Precio:</label>
          <input type="number" id="precio" name="precio" />
        </div>
        <div>
          <button type="submit">Crear</button>
        </div>
      </form>
    </div>
  );
}
