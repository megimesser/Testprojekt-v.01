import React, { useState, useEffect } from 'react';
import './navbar.css';  // Die CSS-Datei für die Navbar-Komponente
import "./navbarfull.css";
import Sidemenu from "./sidemenu"
import Navbar from "./navbar"



function Navbarfull() {
  return (
    <div id="navbarFull">
        <>
        <Navbar />
        <Sidemenu />
        
        
        </>
      
    </div>
  );
}

export default Navbarfull;
