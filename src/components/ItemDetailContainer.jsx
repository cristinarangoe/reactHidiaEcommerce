import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
//import img from '../../img/platoMexicano.png';


export default function ItemDetailContainer() {

    const [cantFinal, setCantFinal] = useState(1);
    const [producto, setProducto] = useState({});

    const {idItem} = useParams();

    console.log(idItem);

    useEffect(() => {

        // new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(
        //             { id: '001', nombre: "Plato mexicano", precio: 12000, descripcion:"Plato mexicano, en donde el frijol refrito, pollo y queso viene en un recipiente especial para gratinar en el horno. Los demás ingredientes vienen en recipientes individuales", imagen:'/img/platoMexicano.png', stock: 5 }
        //         )
        //     }, 2000)
        // })
        //     .then((res) => {
        //         console.log(res)
        //         setProducto(res);
        //         //console.log(productos);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })

        fetch("/ProdsList.json")
        .then(response => response.json())
        .then(res => {
            res.map(prod => {
                if(prod.id ===idItem){
                    console.log(prod.nombre)
                    setProducto(prod);
                }
            })
        })
        .catch(err => {
            console.log(err);
        })


    }, []);

    console.log(producto)

    function onAdd(cantidad){
        console.log("hola");
        setCantFinal(cantidad);
        alert('Se han agregado los productos al carrito.')
    }

    return (
        <>
            <h1>{cantFinal}</h1>
            <ItemDetail producto={producto} onAdd={onAdd}/>
        </>
    )
}

