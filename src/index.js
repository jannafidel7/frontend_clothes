import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from "./store";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <Suspense>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
  </Provider>
);
