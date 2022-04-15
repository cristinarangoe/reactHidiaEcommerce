import React from 'react';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

export default function Item({producto}) {
    return (
        <div key={producto.id} className="flex flex-col w-60 p-4 m-4  shadow-md rounded-lg">

            <img className="px-2" src={producto.imagen}/>
            <h2>{producto.id}</h2>
            <h3 className="text-2xl mb-4"><Link to={`/item/${producto.id}`}>{producto.nombre}</Link></h3>
            <div className="flex justify-between ">
                <h4 className="text-lg">${producto.precio}</h4>
                <CartWidget/>
            </div>
        </div>
    )
}