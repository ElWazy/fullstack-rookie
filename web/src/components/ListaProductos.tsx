import { useState, useEffect } from 'react';
import { Producto } from '../interfaces/Producto';
import { getProductos } from '../services/getProductos';

export function ListaProductos() {
  const [productos, setProductos] = useState<Array<Producto>>([]);

  useEffect(() => {
    async function fetchProductos() {
      const data = await getProductos();
      setProductos(data);
    }
    fetchProductos();
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto: Producto) => {
          const precioFormateado = Number(producto.precio_iva).toLocaleString('es-ES', { maximumFractionDigits: 0 });
          return (
            <li key={producto.id}>
              <span>{producto.nombre}</span> -{'>'} <span>Precio: ${precioFormateado}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
