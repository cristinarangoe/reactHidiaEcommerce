import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import img from '../../img/platoMexicano.png';


export default function ItemDetailContainer() {

    const [producto, setProducto] = useState({});

    useEffect(() => {

        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    { id: '001', nombre: "Plato mexicano", precio: 12000, descripcion:"Plato mexicano, en donde el frijol refrito, pollo y queso viene en un recipiente especial para gratinar en el horno. Los demás ingredientes vienen en recipientes individuales", imagen:img }
                )
            }, 2000)
        })
            .then((res) => {
                console.log(res)
                setProducto(res);
                //console.log(productos);
            })
            .catch((err) => {
                console.log(err);
            })


    }, []);

    return (
        <>
            <ItemDetail producto={producto}/>
        </>
    )
}

