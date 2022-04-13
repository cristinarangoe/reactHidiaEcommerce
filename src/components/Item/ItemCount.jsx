import React, { useEffect, useState } from 'react'


export default function ItemCount({ onAdd, stock, initial}) {

    const [cantParcial, setCantParcial] = useState(initial);

    function adding(){
        if(cantParcial < stock){
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
            <div className="grid place-items-center">
                <div className="flex items-center">
                    <button className="bg-hidia-blue p-2 rounded text-white text-lg" onClick={subs}>-</button>
                    <p className="mx-4">{cantParcial}</p>
                    <button className="bg-hidia-blue p-2 rounded text-white text-lg" onClick={adding}>+</button>
                </div>
                <button className="p-2 mt-2 rounded border-2 border-hidia-blue text-lg" onClick={() => onAdd(cantParcial)}>Agregar al carro</button>
            </div>
        </>

    )


}

