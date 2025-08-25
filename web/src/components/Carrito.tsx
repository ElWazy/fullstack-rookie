import React, { useState } from 'react';
import { Producto } from '../interfaces/Producto';

type Props = {}

export const Carrito = (props: Props) => {
  // Define el estado para almacenar los productos del carrito
  const [productos, setProductos] = useState([]);

  return (
    <div>
      <h2>Carrito</h2>
      <p>Hay {productos.length} productos en el carrito.</p>
    </div>
  )
}