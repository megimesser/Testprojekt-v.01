import React, { useState } from 'react';
import Home from './homesection'; 
import Navbarfull from "./navbarfull";
import Foot from "./footer";
import Pfeilnav from "./Navigationsmenu/pfeilnav";
import Breadcrump from "./Navigationsmenu/breadcrumb";
import Ubungen from "./Ubungen/Ubungen"; 
import Statistik_main from './Statistik/Statistik_main'; 
import "./mainpage.css";

function Main() {
  const [activeComponent, setActiveComponent] = useState('home');
  const [xp1, setXp1] = useState(0); // State to track XP

  const gainXP = (amount) => {
    setXp1((prevXP) => prevXP + amount); // Increase the XP by the given amount
  };

  return (
    <>
      <Navbarfull />
      <Breadcrump activeComponent = {activeComponent}/>
      {activeComponent === 'home' && <Home xp1={xp1} />}  {/* Pass current XP to Home */}
      {activeComponent === 'ubungen' && <Ubungen setActiveComponent={setActiveComponent} gainXP={gainXP} />} {/* Pass setActiveComponent and gainXP */}
      {activeComponent === 'statistik' && <Statistik_main />}
      <Pfeilnav 
        setActiveComponent={setActiveComponent} 
        activeComponent={activeComponent}
      />
      <Foot />
    </>
  );
}

export default Main;
