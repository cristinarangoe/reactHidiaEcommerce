import React from 'react'
import CartWidget from './CartWidget'
import ItemCount from './ItemCount'


export default function ItemDetail({producto, onAdd}) {

    
    return (
        <>
        <div className="flex flex-row mx-10">
            <div className="basis-1/2 grid justify-items-center">
                <img src={producto.imagen}/>
            </div>
            <div className="basis-1/2 mx-10">
                <h1 className="text-5xl text-center text-hidia-yellow">{producto.nombre}</h1>
                <p className="text-xl my-4">{producto.descripcion}</p>
                <div className="flex flex-row justify-center items-center">
                    <p className="text-xl ">${producto.precio}</p>
                    <ItemCount onAdd={onAdd} initial={1} stock={producto.stock}/>
                </div>
            </div>
        </div>
        </>
    )
}