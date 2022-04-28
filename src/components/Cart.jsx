import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../Context/CartContext'
import CartItem from './CartItem';

export default function Cart() {

    const { productosCarrito,  clear, totalCosto } = useContext(Context);

    if(productosCarrito.length === 0) return (
            <>
                <h1 className="text-lg mx-5 my-10">Aún no has agregado productos a tu carrito, anímate a agregarlos, presionando el siguiente botón:</h1>
                <Link to={'/'} className="bg-hidia-blue p-2 rounded text-white mx-5 my-3 w-6/12">Ir a productos.</Link> 
            </>
    );
    return (
        <>
        {}
        <div className="flex flex-row mx-16 shadow-lg rounded-lg">
            <div className="flex flex-col basis-4/6 divide-y-2 divide-slate-300 mx-10">
                <div className="flex flex-row items-center justify-center text-2xl mt-5">
                    <div className="flex justify-center basis-2/6">
                        <h2>Producto</h2>
                    </div>
                    <div className="flex justify-center basis-1/6">
                        <h2>Cantidad</h2>
                    </div>
                    <div className="flex justify-center basis-1/6">
                        <h2>Precio</h2>
                    </div>
                    <div className="flex justify-center basis-1/6">
                        <h2>Total</h2>
                    </div>
                    <div className="flex justify-center basis-1/6">
                        <p></p>
                    </div>
                </div>

                <div className="">
                    {productosCarrito.map(prod => (
                        <CartItem key={prod.id} producto={prod}/>
                    ))}
                </div>

            </div>
            <div className="rounded-r-lg bg-hidia-blue basis-2/6">
                <div className="flex flex-col basis-2/6  divide-y divide-slate-300 mx-10">
                    <div className="flex flex-col items-center justify-center text-2xl text-white mt-5">
                        <h2>Resumen</h2>
                    </div>
                    <div className="flex flex-col text-white text-xl">
                        <div className="flex mx-20 justify-between my-5">
                            <h2>Subtotal</h2>
                            <h2>${totalCosto}</h2>
                        </div>
                        <div className="flex mx-20 justify-between my-5">
                            <h2>Envio</h2>
                            <h2>$4000</h2>
                        </div>
                    </div>
                    <div className="text-white text-xl">
                        <div className="flex mx-20 justify-between my-5">
                            <h2>Subtotal</h2>
                            <h2>${totalCosto+4000}</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <button className="bg-white p-2 rounded text-hidia-blue mx-5 my-3 w-6/12">Continuar con el pago</button>
                    <button onClick={() => clear()} className="bg-white p-2 rounded text-hidia-blue mx-5 w-6/12 my-3">Vaciar el carrito</button>
                </div>
            </div>
        </div>

        </>
    )
}