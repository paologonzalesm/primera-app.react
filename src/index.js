import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
//import './index.css';
//import App from './App';

//asigno variable con el id identificador del "<div>"  del html
const root = document.getElementById("root")

//const elemento = React.createElement(componente,propidades,hijos)
//const elemento = React.createElement("h1",{className: "Saludo"}, "Hola mundo Paolo")

//ReactDOM.render(elemento,root);
ReactDOM.render(<App />,root);
