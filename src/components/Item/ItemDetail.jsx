import React from 'react'
import CartWidget from '../CartWidget'
import ItemCount from './ItemCount'


export default function ItemDetail({producto}) {

    
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
                    <div className="flex items-center mx-16 ">
                        <button className="bg-hidia-blue px-2 rounded text-white text-lg" >-</button>
                        <p className="mx-4">1</p>
                        <button className="bg-hidia-blue px-2 rounded text-white text-lg" >+</button>
                    </div>
                    <CartWidget/>
                </div>
            </div>
        </div>
        </>
    )
}