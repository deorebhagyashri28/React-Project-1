import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' //here we are importing app component

//we are passing dom element from index html file
createRoot(document.getElementById('root')).render(

  // this below is jsx syntax which looks like a HTML but bit different
  //here inside strict we are calling required componenets 
  <StrictMode>
    <App /> 
    
  </StrictMode>,
)
