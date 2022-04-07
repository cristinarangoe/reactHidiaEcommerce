import React from 'react'
import CartWidget from './CartWidget'
import logo from '../img/Logo.png'

export default function Item({id, nombre, precio, imagen}) {
    console.log("cristina")
  return (
        <div key={id} className="flex flex-col w-60 p-4 m-4  shadow-md rounded-lg">
            <img className="px-2" src={imagen}/>
            <h3 className="text-2xl mb-4">{nombre}</h3>
            <div className="flex justify-between ">
                <h4 className="text-lg">${precio}</h4>
                <CartWidget/>
            </div>
        </div>
  )
}