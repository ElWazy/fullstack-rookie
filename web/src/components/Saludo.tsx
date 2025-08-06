import { useState, useEffect } from 'react';
import { getSaludo } from '../services/getSaludo.tsx';

export function Saludo() {
    const [saludo, setSaludo] = useState<string>("cargando mensaje...");

    useEffect(() => {
        async function fetchProductos() {
            const data = await getSaludo();
            setSaludo(data.mensaje);
        }
        fetchProductos();
    }, [saludo]);

    return <span className="saludo"> {saludo}</span >
}
