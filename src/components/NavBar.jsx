import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { Context } from "../Context/CartContext";
import Dropdown  from "./Dropdown";

export default function NavBar() {
  const {cantFinal} = useContext(Context);

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
              <ul key="navBarList" className="flex list-none text-md lg:text-xl font-medium font-sans ">
                <li key="inicio" className="px-3 no-underline hover:underline hover:underline-offset-2 hover: decoration-hidia-yellow hover:decoration-2">
                  <Link to={"/"}>Inicio</Link>
                </li>
                <li key="contacto" className="px-3 no-underline hover:underline hover:underline-offset-2 hover: decoration-hidia-yellow hover:decoration-2">
                  <Link to={"/"}>Contacto</Link>
                </li>
                <li key="productos" className="px-3 no-underline hover:underline hover:underline-offset-2 hover: decoration-hidia-yellow hover:decoration-2">
                  <Dropdown/>
                </li>
                <li key="perfil/registro" className="px-3 no-underline hover:underline hover:underline-offset-2 hover: decoration-hidia-yellow hover:decoration-2">
                  <Link to={"/"}>Perfil/Registro</Link>
                </li>
              </ul>
            </div>
            <Link to={'/cart'}><CartWidget >({cantFinal})</CartWidget></Link>
          </div>
        </div>
      </nav>
    </>
  );
}
