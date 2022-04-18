import './App.css';

import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App(){

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/category/:idCategory" element={<ItemListContainer/>}/>
        <Route exact path="/item/:idItem" element={<ItemDetailContainer/>}/>
        <Route exact path="*" element={<ItemDetailContainer/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

