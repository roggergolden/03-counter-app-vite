import React from "react";
import ReactDom from 'react-dom/client';
// import HelloWorldApp  from './helloword';
import {FirstApp} from './FirstApp';
import './estilos.css';


ReactDom.createRoot( document.getElementById('root')).render (
    <React.StrictMode>
        <FirstApp title="Hola, Soy Rogger Salazar" subTitle={27}/>

    </React.StrictMode>
);