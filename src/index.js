import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MenuProvider from 'react-flexible-sliding-menu';
import Menu from './Components/Menu';



ReactDOM.render(
  <BrowserRouter>
    <MenuProvider  MenuComponent={Menu} animation="push">
      <App />
    </MenuProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
