import { Saludo } from "../interfaces/Saludo"

export async function getSaludo(): Promise<Saludo> {
    return fetch("http://localhost:8000/productos/saludo/")
        .then((response) => response.json())
        .catch((error) => console.error("Error", error));
}
