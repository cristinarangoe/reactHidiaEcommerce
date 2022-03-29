import React from 'react';
import logo from '../img/Logo.png'

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
                    <div className="px-3 flex">
                        <a className="bg-hidia-blue p-2 rounded" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="white">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
        </>

    );
}