import React from 'react';
import { useParams } from 'react-router-dom';

export default function OrderCreate({buyer}) {

    const {idCompra} = useParams(); 


  return (
      <>
      <h2 className="text-2xl my-5 mx-4">Tu orden fue creada con exito</h2>
      <h2 className="text-2xl my-5 mx-4">El id de tu compra es: {idCompra}</h2>
      </>
  )
}
