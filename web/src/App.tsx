import { Saludo } from './components/Saludo';
import { ListaProductos } from './components/ListaProductos';
import { CrearProducto } from './components/CrearProducto';

function App() {

  return (
    <>
      <h1>Tienda</h1>
      <Saludo />
      <ListaProductos />
      <CrearProducto />
    </>
  )
}

export default App
