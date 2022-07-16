import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
//importo BrowserRouter de la librería react-router-dom (previamente instalada)
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
//envolveré mi aplicación en BrowserRouter
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
