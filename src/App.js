import './App.css';

import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

export default function App(){

  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer saludo="Este es un saludo, para todos los que están viendo esta página web"></ItemListContainer>
    </>

  );
}

