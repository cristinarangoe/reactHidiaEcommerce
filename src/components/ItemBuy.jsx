import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../Context/CartContext'
import ItemCount from './ItemCount'


export default function ItemBuy({initial, producto}) {

    const [cantParcial, setCantParcial] = useState(initial);

    const {addItem} = useContext(Context);

    function adding(){
        console.log("hola")
        if(cantParcial < producto.stock){
            setCantParcial(cantParcial + 1);
        }
    }
    function subs(){
        if(cantParcial > 1){
            setCantParcial(cantParcial - 1);
        }
    }

  return (
    <>
                <ItemCount producto={producto} onPressAdd={adding} onPressSubs={subs} cantidad={cantParcial}/>
                <div className="flex mx-16">
                    <button className="bg-hidia-blue p-2 rounded" onClick={() => addItem(producto,cantParcial)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="white"
                        >
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                    </button>
                </div>
                <div className="">
                    <Link className="p-2 rounded border-2 border-hidia-blue text-hidia-blue text-lg font-medium" to={'/cart'}>Terminar mi compra
                    </Link>
                </div>
    </>
  )
}
