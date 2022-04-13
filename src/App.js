import './App.css';

import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';

export default function App(){

  return (
    <>
      <NavBar/>
      <ItemDetailContainer/>
      <ItemListContainer/>
    </>

  );
}

