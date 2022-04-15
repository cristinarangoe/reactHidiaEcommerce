import React from "react";
//import logo from '../img/Logo.png'
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  let categorias = ["arepas", "carnicos", "mexicano"];

  return (
    <>
      <nav>
        <div className="flex items-center justify-between px-2 py-0.5  mb-3">
          <div className="px-3">
            <Link to={"/"}>
              <img src="/img/Logo.png" alt="" className="w-20" />
            </Link>
          </div>
          <div className="flex items-center px-3">
            <div className="px-3">
              <ul className="flex list-none text-md lg:text-xl font-medium font-sans ">
                <li className="px-3 no-underline hover:underline hover:underline-offset-2 hover: decoration-hidia-yellow hover:decoration-2">
                  <Link to={"/"}>Inicio</Link>
                </li>
                <li className="px-3 no-underline hover:underline hover:underline-offset-2 hover: decoration-hidia-yellow hover:decoration-2">
                  <Link to={"/"}>Contacto</Link>
                </li>
                <li>
                  <ul>
                    {categorias.map((cat) => (
                      <li className="px-3 no-underline hover:underline hover:underline-offset-2 hover: decoration-hidia-yellow hover:decoration-2">
                        <Link to={`/category/${cat}`}>{cat}</Link>
                      </li>
                    ))} 
                  </ul>
                </li>
                <li className="px-3 no-underline hover:underline hover:underline-offset-2 hover: decoration-hidia-yellow hover:decoration-2">
                  <Link to={"/"}>Perfil/Registro</Link>
                </li>
              </ul>
            </div>
            <CartWidget></CartWidget>
          </div>
        </div>
      </nav>
    </>
  );
}
