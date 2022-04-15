//mapear para mostrar la lista

//renderiza un item, por cada uno de los que tenga en el array que le paso el ItemListContainer
//lo mapea y cuando lo mapea genera un item cada vez

import React from "react";
import Item from "./Item";

export default function ItemList({ productos, categoria }) {

    let productosFiltrado;

    if(categoria){
        productosFiltrado = productos.filter(producto => producto.categoria === categoria);
    }else{
        productosFiltrado = productos;
    }

    return productosFiltrado.map(prod => (
        console.log(prod.nombre),
    <Item
        producto = {prod}
    ></Item>
    ));
}
