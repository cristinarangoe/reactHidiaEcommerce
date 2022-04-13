import React, { useEffect, useState } from 'react'
import Item from './Item';
import ItemCount from './ItemCount';
import logo from '../../img/Logo.png';
import ItemList from './ItemList';
import ProdsList from '../../ProdsList'

export default function ItemListContainer() {

    const [cantFinal, setCantFinal] = useState(1);
    const [productos, setProductos] = useState([]);

    let stock =5;

    function onAdd(cantidad){
        setCantFinal(cantidad);
        alert('Se han agregado los productos al carrito.')
    }

    useEffect(() => {

        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(ProdsList)
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

