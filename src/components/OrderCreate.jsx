import React, { useEffect } from 'react';
import {doc, getDoc, getFirestore, collection, getDocs, addDoc} from 'firebase/firestore';
import { useParams } from 'react-router-dom';

export default function OrderCreate({buyer}) {

    const {idCompra} = useParams(); 

    // let idCompra;

    // useEffect(() => {

    //     const db = getFirestore();

    //     const refVentas = collection(db, 'ventas');

    //     addDoc(refVentas, buyer).then(({id}) => {
    //         console.log(id);
    //         idCompra = id;
    //     })

    // },[]);

    // console.log(idCompra);
    // console.log(buyer);

  return (
      <>
      <div>Tu orden fue creada con exito</div>
      <div>El id de tu compra es:</div>
      <p>{idCompra}</p>
      </>
  )
}
