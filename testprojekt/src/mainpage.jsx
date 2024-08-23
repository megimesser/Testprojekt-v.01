import React from 'react';
import Home from './homesection'; // Importiere die Home-Komponente aus der Datei "HomeSection.jsx"
import Nav from "./navbar"
import Foot from "./footer"
import "./mainpage.css";


function Main() {
  return (
   <>
   <Nav />
   <Home />
   <Foot />
   
   </>
    
   

   
  );
}

export default Main;
