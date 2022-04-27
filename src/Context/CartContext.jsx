import React, { createContext, useState } from 'react'

export const Context = createContext();

export default function CartContext({children}) {

    const [cantFinal, setCantFinal] = useState(0);
    const [productosCarrito, setProductosCarrito] = useState([]);

    const [totalCosto, setTotalCosto] = useState(0);

    //Funcion de agregar, item, cantidad
    function addItem(item, cantidad){
        if(isInCart(item.id)){
            productosCarrito.forEach((prod) => {
                if(prod.id === item.id){
                    if((prod.cantidad + cantidad) > prod.stock){
                        alert('La cantidad que ingresaste es mayor a la cantidad que hay en inventario, se agrego al carrito solo la cantidad disponible del producto.')
                        setCantFinal(cantFinal - prod.cantidad + prod.stock);
                        setTotalCosto(totalCosto - (prod.cantidad * prod.precio) + (prod.stock * prod.precio));
                        prod.cantidad = prod.stock;
                        prod.total = prod.cantidad * prod.precio;
                        

                    }else {
                        prod.cantidad += cantidad;
                        setCantFinal(cantFinal + cantidad);
                        prod.total += (item.precio * cantidad);
                        setTotalCosto(totalCosto + (item.precio * cantidad))
                    }
                }
            });
        }else{
            let newItem = {...item, cantidad: cantidad, total: item.precio * cantidad};
            setProductosCarrito([...productosCarrito, newItem]);
            setCantFinal(cantFinal + cantidad);
            setTotalCosto(totalCosto + (item.precio * cantidad));
        }
        // setCantFinal(cantFinal + cantidad);
    }

    //funcion de remover un item del carrito, id
    function removeItem(idItem){
        let prodEliminar =  productosCarrito.find((prod) => prod.id === idItem);
        setCantFinal(cantFinal - prodEliminar.cantidad);
        setProductosCarrito(productosCarrito.filter(prod => prod.id != idItem));
        setTotalCosto(totalCosto - prodEliminar.total);
    }

    //funcion de vaciar el arreglo del carrito de los productos
    function clear(){
        setCantFinal(0);
        setProductosCarrito([]);
        setTotalCosto(0);
    }

    //funcion de ver si un producto ya esta en el carrito o no, id, retorne true false
    function isInCart(idItem){
        return productosCarrito.find((prod) => prod.id === idItem) ? true : false;
    }

    //
    return (
        <>
            <Context.Provider value={{productosCarrito, addItem, removeItem, clear, isInCart, cantFinal, setCantFinal, totalCosto}}>
                {children}
            </Context.Provider>
        </>
    )
}
