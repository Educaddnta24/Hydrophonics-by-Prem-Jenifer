import React, { useEffect, useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className="App">
   









    <Navbar/>
    <Header/>
    <Home/>
    <Technologies/>
   <About/>
   <Contact/>
   <Footer/>
    </div>
  );
}


export default App;
