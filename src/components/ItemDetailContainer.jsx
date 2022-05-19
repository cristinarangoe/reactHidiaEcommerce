import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import {doc, getDoc, getFirestore } from 'firebase/firestore';

export default function ItemDetailContainer() {

    //const [cantFinal, setCantFinal] = useState(1);
    const [producto, setProducto] = useState({});

    const {idItem} = useParams();

    useEffect(() => {

        const db = getFirestore();

        const refProducto = doc(db, 'productos', idItem);

        getDoc(refProducto).then((res) => {
            setProducto({id: res.id, ...res.data()});
        })

    },[idItem]);


    //como se hiz con promesas, conexion antes de firebase
    // useEffect(() => {

    //     // new Promise((resolve, reject) => {
    //     //     setTimeout(() => {
    //     //         resolve(
    //     //             { id: '001', nombre: "Plato mexicano", precio: 12000, descripcion:"Plato mexicano, en donde el frijol refrito, pollo y queso viene en un recipiente especial para gratinar en el horno. Los demás ingredientes vienen en recipientes individuales", imagen:'/img/platoMexicano.png', stock: 5 }
    //     //         )
    //     //     }, 2000)
    //     // })
    //     //     .then((res) => {
    //     //         console.log(res)
    //     //         setProducto(res);
    //     //         //console.log(productos);
    //     //     })
    //     //     .catch((err) => {
    //     //         console.log(err);
    //     //     })

    //     fetch("/ProdsList.json")
    //     .then(response => response.json())
    //     .then(res => {
    //         res.map(prod => {
    //             if(prod.id ===idItem){
    //                 setProducto(prod);
    //             }
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })


    // }, [idItem]);

    // function onAdd(cantidad){
    //     setCantFinal(cantidad);
    //     alert('Se han agregado los productos al carrito.')
    // }

    return (
        <>
            <ItemDetail producto={producto} />
        </>
    )
}

