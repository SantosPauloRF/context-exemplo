import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import { MyContextProvider } from '../Context'; //Import the provider function


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <MyContextProvider> {/* wrap the app with the provider function component */}
      <App />
    </MyContextProvider> {/* wrap the app with the provider function component */}
  </React.StrictMode>
);

