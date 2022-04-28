import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDM-PEv1lPBbSrQY6yN8Nt3aTeG9EyDB20",
  authDomain: "hidia-82c13.firebaseapp.com",
  projectId: "hidia-82c13",
  storageBucket: "hidia-82c13.appspot.com",
  messagingSenderId: "559316427892",
  appId: "1:559316427892:web:11f80543bf14eb737e9d21"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
