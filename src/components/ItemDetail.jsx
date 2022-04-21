import React from 'react'
import ItemCount from './ItemCount'


export default function ItemDetail({producto}) {

    return (
        <>
        <div key={producto.id} className="flex flex-row mx-10 ">
            <div className="basis-1/2 grid justify-items-center ">
                <img className="max-h-96" src={producto.imagen} alt={producto.nombre}/>
            </div>
            <div className="basis-1/2 mx-10">
                <h1 className="text-5xl text-center text-hidia-yellow">{producto.nombre}</h1>
                <p className="text-xl my-4">{producto.descripcion}</p>
                <div className="flex flex-row justify-center items-center">
                    <p className="text-xl ">${producto.precio}</p>
                    <ItemCount initial={1} producto={producto}/>
                </div>
            </div>
        </div>
        </>
    )
}