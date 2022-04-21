import React, { useContext } from 'react'
import { Context } from '../Context/CartContext'

export default function Cart() {

    const { productosCarrito, removeItem, clear } = useContext(Context);

    return (
        <>
            <button onClick={() => clear()} className="bg-hidia-blue p-2 rounded text-white mx-5">Vaciar el carrito</button>
            <div className="mx-5 my-5">
                <h2>A continuacion sale la lista de los productos que estan en el carrito, si desea borrar un producto presione borrar</h2>
                {productosCarrito.map(prod => (
                    <div key={prod.id} className="flex my-8 mx-5">
                        <p>{prod.nombre}</p>
                        <button onClick={() => removeItem(prod.id)} className="bg-hidia-blue p-2 rounded text-white mx-5">Borrar</button>
                    </div>
                ))}
            </div>
        </>
    )
}