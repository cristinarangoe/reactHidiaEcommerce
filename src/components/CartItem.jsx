import React, { useContext, useState } from 'react'
import { Context } from '../Context/CartContext'
import ItemCount from './ItemCount'

export default function CartItem({producto}) {

  const {cantFinal, setCantFinal,removeItem, addItem} = useContext(Context);

  const [subtotalParcial, setSubtotalParcial] = useState(producto.precio * producto.cantidad);

  function adding(producto){
    if(producto.cantidad < producto.stock){
      addItem(producto, 1);
    }
  }

  function subs(producto){
    if(producto.cantidad > 1){
      addItem(producto, -1);
    }else if(producto.cantidad===1){
      removeItem(producto.id);
    }
  }

  return (
    
    <>
        <div className="flex flex-row items-center my-10 ">
            <div className="flex flex-row items-center basis-2/6 ">
              <div className="basis-1/2">
                <img src={producto.imagen} className="w-32 lg:w-40 lg:pr-2"/>
              </div>
              <div className="basis-1/2">
                <h2 className="text-lg lg:text-2xl">{producto.nombre}</h2>
              </div>
            </div>
            <div className="flex justify-center basis-1/6">
                <ItemCount producto={producto} onPressAdd={() => adding(producto)} onPressSubs={() => subs(producto)} cantidad={producto.cantidad}/>
            </div>
            <div className="flex justify-center basis-1/6">
              <h2 className="text-lg">${producto.precio}</h2>
            </div>
            <div className="flex justify-center basis-1/6">
              <h2 className="text-lg">${producto.total}</h2>
            </div>
            <div className="flex justify-center basis-1/6">
              <button className="" onClick={() => removeItem(producto.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="red">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
        </div>
    </>

  )
}
