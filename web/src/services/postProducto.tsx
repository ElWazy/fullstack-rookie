export function postProducto({ nombre, precio_unitario }: { nombre: string; precio_unitario: number; }) {
  return fetch('http://localhost:8000/productos/crear/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nombre, precio_unitario }),
  })
    .then((response) => response.json())
    .catch((error) => console.error('Error:', error));
}
