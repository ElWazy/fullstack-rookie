import { Saludo } from './components/Saludo';
import { ListaProductos } from './components/ListaProductos';
import { CrearProducto } from './components/CrearProducto';
import { Carrito } from './components/Carrito';
import './index.css';
function App() {

  return (
    <>
      <h1>Tienda Atheris</h1>

      <Saludo />
      <ListaProductos />
      <CrearProducto />
      <Carrito />
    </>
  )
}

export default App
