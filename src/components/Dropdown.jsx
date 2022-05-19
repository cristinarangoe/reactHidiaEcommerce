import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Link } from 'react-router-dom';

export default function Dropdown() {

  let categorias = ["Arepas", "Cárnicos", "Mexicano"];
  return (
      <>
    <DropdownMenu.Root className="flex mb-3">
        <DropdownMenu.Trigger className="flex">
            {/* <button className="text-md lg:text-xl font-medium font-sans cursor-default">Productos </button> */}
            <p className="text-md lg:text-xl font-medium font-sans cursor-default focus:outline-none">Productos</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
            
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="mb-3" align="start">
          {categorias.map((cat) => (
            <DropdownMenu.Item key={`categoriaItem${cat}`} className="text-md lg:text-xl font-medium font-sans border-none cursor-default focus:outline-none no-underline hover:underline hover:underline-offset-2 hover: decoration-hidia-yellow hover:decoration-2">
              <Link to={`/category/${cat}`}>{cat}</Link>
            </DropdownMenu.Item>
          ))} 
        </DropdownMenu.Content>
    </DropdownMenu.Root>
      </>
  )
}
