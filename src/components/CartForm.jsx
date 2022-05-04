import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Context/CartContext";
import {doc, getDoc, getFirestore, collection, getDocs, addDoc} from 'firebase/firestore';


export default function CartForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  const [loading, setLoading] = useState(false);
//   const [idCompra, setIdCompra] = useState(null);

  const navigate = useNavigate();

  const { productosCarrito, totalCosto, clear } = useContext(Context);

  let productosCarritoFiltrado = [];

  productosCarrito.forEach((product) => {
    let newProd = {
      id: product.id,
      title: product.nombre,
      price: product.precio,
      cantidad: product.cantidad
    };
    productosCarritoFiltrado = [...productosCarritoFiltrado, newProd];
  });


  function comprar(e){
      e.preventDefault();
      setLoading(true);
    const buyer = {
        buyer: { nombre, email, phone },
        items: productosCarritoFiltrado,
        total: totalCosto,
      };
    console.log("holaaaaa")
    try {
        const db = getFirestore();

        const refVentas = collection(db, 'ventas');
    
        addDoc(refVentas, buyer).then(({id}) => {
            console.log(id);
            if(id) navigate(`/ordercreate/:${id}`)
        })
    } catch (error) {
        console.log(error);
    }
    setLoading(false);
    clear();
  }

  return (
    <>
        <h2 className="text-2xl my-5 mx-4">Ingrese los siguientes datos para poder continuar con la compra:</h2>
      <form onSubmit={(e) => comprar(e)} className="mx-20">
        <label className="my-5">Nombre
          <input
            type={"text"}
            className="border border-indigo-600 my-3 mx-3"
            value={nombre}
            onChange={(e) => {
              setNombre(e.currentTarget.value);
            }}
          />
        </label>
        <br/>
        <label className="my-5">Celular
          <input
          
            type={"text"}
            className="border border-indigo-600 my-3 mx-3"
            value={phone}
            onChange={(e) => {
              setPhone(e.currentTarget.value);
            }}
          />
        </label>
        <br/>
        <label>Correo
          <input
            type={"email"}
            className="border border-indigo-600 my-3 mx-3"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
        </label>
        <br/>
        <button className="bg-hidia-blue p-2 rounded">{loading ? "Loading..." : "Comprar"}</button>
      </form>
    </>
  );
}
