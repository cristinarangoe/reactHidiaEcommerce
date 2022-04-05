import React, { useState } from 'react'
import ItemCount from './ItemCount';

export default function ItemListContainer() {

    const [cantFinal, setCantFinal] = useState(1);


    let stock =5;

    function onAdd(cantidad){
        setCantFinal(cantidad);
        alert('Se han agregado los productos al carrito.')
    }


    return (
        
        <>
        <h1>{cantFinal}</h1>
        <ItemCount onAdd={onAdd} initial={1} stock={stock}/>
        </>

    )
}

