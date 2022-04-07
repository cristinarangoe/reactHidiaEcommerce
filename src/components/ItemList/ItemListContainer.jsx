import React, { useEffect, useState } from 'react'
import Item from '../Item';
import ItemCount from '../ItemCount';
import logo from '../../img/Logo.png';
import ItemList from './ItemList';

export default function ItemListContainer() {

    const [cantFinal, setCantFinal] = useState(1);
    const [productos, setProductos] = useState([]);

    let stock =5;

    function onAdd(cantidad){
        setCantFinal(cantidad);
        alert('Se han agregado los productos al carrito.')
    }

    useEffect(() => {

        const prods = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    { id: '001', nombre: "Plato mexicano", precio: 12000, descripcion:"plato con deliciosos ingredientes", imagen:logo },
                    { id: '002', nombre: "Nachos", precio: 10000, imagen:logo},
                    { id: '003', nombre: "Arepa blanca pequeña", precio: 15000, descripcion:"arepa hecha con maiz 100% colombiano",imagen:logo },
                    { id: '004', nombre: "Arepa blanca grande", precio: 8000, descripcion:"arepa version grande blanca",imagen:logo },
                    { id: '005', nombre: "Arepa de chócolo", precio: 11000, descripcion:"chocolo 100% natural",imagen:logo },
                    { id: '006', nombre: "Chorizo de cerdo", precio: 20000, descripcion:"Hecho con ingredientes de la mejor calidad",imagen:logo },
                    { id: '007', nombre: "Carne de hamburguesa", precio: 22000, descripcion:"Carne de res",imagen:logo },
                    { id: '008', nombre: "Guacamole", precio: 15000, descripcion:"Hecho sin conservantes", imagen:logo },
                ])
                //reject(null)
            }, 3000)
            //reject(null)
        })
            .then((res) => {
                console.log("hola")
                setProductos(res);
                //console.log(productos);
            })
            .catch((err) => {
                console.log(err);
            })

    },[])

    console.log(productos);

    //este es el que debe esperar 2 segundos
    //cuando llega la promesa, debe mandar la ifnormacion al item list, setea el estado y se lo manda a item list
    //bisca los productos, espera 2 segundos, se los pasa al ite list
    return (
        
        <>
        <h1>{cantFinal}</h1>
        <ItemCount onAdd={onAdd} initial={1} stock={stock}/>
        <div className="grid  justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-10">
            <ItemList productos={productos}/>
        </div>
        </>

    )
}

