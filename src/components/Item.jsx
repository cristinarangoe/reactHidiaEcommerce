import React, { useContext } from 'react';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import { Context } from '../Context/CartContext';

export default function Item({producto}) {
    const {addItem} = useContext(Context);

    console.log(producto.id)

    return (
        <div key={producto.id} className="flex flex-col w-60 p-4 m-4  shadow-md rounded-lg">
            <Link to={`/item/${producto.id}`}><img className="px-2" src={producto.imagen} alt={producto.nombre}/></Link>
            <h3 className="text-2xl my-4"><Link to={`/item/${producto.id}`}>{producto.nombre}</Link></h3>
            <div key={`downPart${producto.id}`} className="flex justify-between">
                <h4 className="text-lg">${producto.precio}</h4>
                <CartWidget onPress={() => addItem(producto, 1)}/>
            </div>
        </div>
    )
}