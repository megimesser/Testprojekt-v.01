import React from 'react';
import Home from './homesection'; // Importiere die Home-Komponente aus der Datei "HomeSection.jsx"
import Navbarfull from "./navbarfull"
import Foot from "./footer"
import "./mainpage.css";


function Main() {
  return (
   <>
   <Navbarfull />
   <Home />
   <Foot />
   
   </>
    
   

   
  );
}

export default Main;
