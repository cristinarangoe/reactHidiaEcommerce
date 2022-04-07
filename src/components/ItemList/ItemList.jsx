//mapear para mostrar la lista

//renderiza un item, por cada uno de los que tenga en el array que le paso el ItemListContainer
//lo mapea y cuando lo mapea genera un item cada vez

import React from "react";
import Item from "../Item";

export default function ItemList({ productos }) {
    return productos.map(prod => (
        //console.log(prod.nombre);
    <Item
        id={prod.id}
        nombre={prod.nombre}
        precio={prod.precio}
        imagen={prod.imagen}
    >cristina</Item>
    ));
}
