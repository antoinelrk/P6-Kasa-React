import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/scss/app.scss'
import { RouterProvider } from 'react-router-dom'
import router from './Router.jsx'
import dotenv from 'dotenv'
dotenv.config()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);