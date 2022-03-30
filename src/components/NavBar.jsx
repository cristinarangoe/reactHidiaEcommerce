import React from 'react';
import logo from '../img/Logo.png'
import CartWidget from './CartWidget';

export default function NavBar(){
    return (
        <>
        <nav>
            <div className="flex items-center justify-between px-2 py-0.5  mb-3">
                <div className="px-3">
                    <a href="#">
                        <img src={logo} alt="" className="w-20"/>
                    </a>
                </div>
                <div className="flex items-center px-3">
                    <div className="px-3">
                        <ul className="flex list-none text-md lg:text-xl font-medium font-sans " >
                            <li><a className="px-3 no-underline hover:underline hover:underline-offset-2 hover: decoration-hidia-yellow hover:decoration-2" href="#" >Inicio</a></li>
                            <li><a className="px-3 no-underline hover:underline hover:underline-offset-2 hover: decoration-hidia-yellow hover:decoration-2" href="#" >Contacto</a></li>
                            <li><a className="px-3 no-underline hover:underline hover:underline-offset-2 hover: decoration-hidia-yellow hover:decoration-2" href="#" >Productos</a></li>
                            <li><a className=" px-3 no-underline hover:underline hover:underline-offset-2 hover: decoration-hidia-yellow hover:decoration-2" href="#">Perfil/Registro</a></li>
                        </ul>
                    </div>
                    <CartWidget></CartWidget>
                </div>
            </div>
        </nav>
        </>

    );
}