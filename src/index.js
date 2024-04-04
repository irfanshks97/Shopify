import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react'; 
import "../node_modules/bootstrap/dist/css/bootstrap.css";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

);