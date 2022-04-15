import React, { useEffect, useState } from 'react'
import Item from './Item';
import ItemCount from './ItemCount';
//import logo from '../../img/Logo.png';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';


export default function ItemListContainer() {

    const [productos, setProductos] = useState([]);

    const {idCategory} = useParams();

    useEffect(() => {

        // new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(ProdsList)
        //         //reject(null)
        //     }, 3000)
        //     //reject(null)
        // })



        fetch("/ProdsList.json")
            .then(response => response.json())
            .then(res => {
                console.log("hola")
                setProductos(res);
                //console.log(productos);
            })
            .catch(err => {
                console.log(err);
            })

    },[])

    console.log(idCategory);

    //este es el que debe esperar 2 segundos
    //cuando llega la promesa, debe mandar la ifnormacion al item list, setea el estado y se lo manda a item list
    //bisca los productos, espera 2 segundos, se los pasa al ite list
    return (
        
        <>
        <div className="grid  justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-10">
            <ItemList productos={productos} categoria={idCategory}/>
        </div>
        </>

    )
}

