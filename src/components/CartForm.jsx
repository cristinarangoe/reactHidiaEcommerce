import React, { useContext,  useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Context } from "../Context/CartContext";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

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
      cantidad: product.cantidad,
    };
    productosCarritoFiltrado = [...productosCarritoFiltrado, newProd];
  });

  function comprar(e) {
    e.preventDefault();
    setLoading(true);
    const buyer = {
      buyer: { nombre, email, phone },
      items: productosCarritoFiltrado,
      date: serverTimestamp(),
      total: totalCosto,
    };
    console.log("holaaaaa");
    try {
      const db = getFirestore();

      const refVentas = collection(db, "ventas");

      addDoc(refVentas, buyer).then(({ id }) => {
        console.log(id);
        if (id) navigate(`/ordercreate/:${id}`);
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    clear();
  }

  

  return (
    <div className="flex flex-row">
      <div className="basis-1/2">
        <h2 className="text-2xl my-5 mx-4">
          Ingrese los siguientes datos para poder continuar con la compra:
        </h2>
        <form onSubmit={(e) => comprar(e)} className="mx-20">
          <label className="my-5">
            Nombre
            <input
              type={"text"}
              className="border border-indigo-600 my-3 mx-3"
              value={nombre}
              onChange={(e) => {
                setNombre(e.currentTarget.value);
              }}
            />
          </label>
          <br />
          <label className="my-5">
            Celular
            <input
              type={"text"}
              className="border border-indigo-600 my-3 mx-3"
              value={phone}
              onChange={(e) => {
                setPhone(e.currentTarget.value);
              }}
            />
          </label>
          <br />
          <label>
            Correo
            <input
              type={"email"}
              className="border border-indigo-600 my-3 mx-3"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </label>
          <br />
          <button className="bg-hidia-blue p-2 rounded">
            {loading ? "Loading..." : "Comprar"}
          </button>
        </form>
      </div>

      <div className="basis-1/2">
        <h2 className="text-2xl my-5 mx-4">La orden que está siendo procesada es:</h2>
        <div>
          <div className="flex flex-row items-center justify-center text-2xl mt-5">
            <div className="flex justify-center basis-2/6">
              <h2>Producto</h2>
            </div>
            <div className="flex justify-center basis-2/6">
              <h2>Cantidad</h2>
            </div>
            <div className="flex justify-center basis-2/6">
              <h2>Precio</h2>
            </div>
          </div>
          <div className="">
            {productosCarrito.map((prod) => (
              <div className="flex flex-row items-center justify-center text-lg mt-3" key={`prodFinalizar${prod.nombre}`}>
                <div className="flex justify-center basis-2/6">
                  <h2>{prod.nombre}</h2>
                </div>
                <div className="flex justify-center basis-2/6">
                  <h2>{prod.cantidad}</h2>
                </div>
                <div className="flex justify-center basis-2/6">
                  <h2>{prod.precio}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl my-5 mx-4">El total de la compra es: ${totalCosto + 4000}</h2>
        </div>
      </div>
    </div>
  );
}


