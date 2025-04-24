export async function getProductos() {
  const response = await fetch('http://localhost:8000/productos/');
  const data = await response.json();
  return data.productos;
}
