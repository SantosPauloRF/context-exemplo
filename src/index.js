import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {MeuContextProvedor} from "./contexts/MeuContext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MeuContextProvedor>
      <App />
    </MeuContextProvedor>
  </React.StrictMode>
);