import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartApp } from './CartApp'
import { BrowserRouter } from 'react-router-dom'
import './App.css';


const basename = "/CartAppBasic";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}><CartApp></CartApp></BrowserRouter>
  </React.StrictMode>,
)
//Y