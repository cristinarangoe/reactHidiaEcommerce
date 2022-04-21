import React, { createContext, useState } from 'react'

export const Context = createContext();

export default function CartContext({children}) {

    const [cantFinal, setCantFinal] = useState(0);
    const [productosCarrito, setProductosCarrito] = useState([]);

    //Funcion de agregar, item, cantidad
    function addItem(item, cantidad){
        console.log("hola");
        if(isInCart(item.id)){
            productosCarrito.map((prod) => {
                if(prod.id === item.id){
                    if((prod.cantidad + cantidad) > prod.stock){
                        alert('La cantidad que ingresaste es mayor a la cantidad que hay en inventario, se agrego al carrito solo la cantidad disponible del producto.')
                        setCantFinal(cantFinal - prod.cantidad + prod.stock);
                        prod.cantidad = prod.stock;
                    }else {
                        prod.cantidad += cantidad;
                        setCantFinal(cantFinal + cantidad);
                    }
                }
            });
        }else{
            let newItem = {...item, cantidad: cantidad};
            setProductosCarrito([...productosCarrito, newItem]);
            setCantFinal(cantFinal + cantidad);
        }
        // setCantFinal(cantFinal + cantidad);
    }

    //funcion de remover un item del carrito, id
    function removeItem(idItem){
        let prodEliminar =  productosCarrito.find((prod) => prod.id === idItem);
        setCantFinal(cantFinal - prodEliminar.cantidad);
        setProductosCarrito(productosCarrito.filter(prod => prod.id != idItem));
    }

    //funcion de vaciar el arreglo del carrito de los productos
    function clear(){
        setCantFinal(0);
        setProductosCarrito([]);
    }

    //funcion de ver si un producto ya esta en el carrito o no, id, retorne true false
    function isInCart(idItem){
        return productosCarrito.find((prod) => prod.id === idItem) ? true : false;
    }

    return (
        <>
            <Context.Provider value={{productosCarrito, addItem, removeItem, clear, isInCart, cantFinal}}>
                {children}
            </Context.Provider>
        </>
    )
}
