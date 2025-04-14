import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Contact from './components/Contact'
import ContactForm from './components/ContactForm/ContactForm'

function App() {

  return (
    <div>
       <Navigation />   
       <Contact />
       <ContactForm />
      
    </div>
   
  );
}

export default App
