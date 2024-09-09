import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Home from './homesection'; 
import Navbarfull from "./navbarfull";
import Foot from "./footer";
import Pfeilnav from "./Navigationsmenu/pfeilnav";
import Breadcrump from "./Navigationsmenu/breadcrumb";
import Ubungen from "./Ubungen/Ubungen"; 
import Testkomponente from "./Testkomponente/Testkomponente";
import Statistik_main from './Statistik/Statistik_main'; 
import "./mainpage.css";

function Main() {
  const [activeComponent, setActiveComponent] = useState('home');
  const [xp1, setXp1] = useState(0); // State to track XP
  const [animate, setAnimate] = useState(false); // State to trigger animation

  const gainXP = (amount) => {
    setXp1((prevXP) => prevXP + amount); // Increase the XP by the given amount
  };

  useEffect(() => {
    // Trigger the animation when the component mounts
    setAnimate(true);
  }, []);

  return (
    <>
      <Navbarfull 
        setActiveComponent={setActiveComponent} 
        activeComponent={activeComponent} // Pass activeComponent to Navbar
      />

      <motion.div
        animate={{
          x: animate ? 0 : -1000, // Slide in animation
        }}
        initial={{
          opacity: 1,
          x: -1000, // Start off-screen
        }}
        transition={{
          duration: 1, // Animation duration of 1 second
        }}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Breadcrump activeComponent={activeComponent} />
        
        {activeComponent === 'home' && <Home gainXP={gainXP} />}  {/* Pass gainXP to Home */}
        {activeComponent === 'ubungen' && <Ubungen setActiveComponent={setActiveComponent} gainXP={gainXP} />}
        {activeComponent === 'statistik' && <Statistik_main />}
        {activeComponent === 'test' && <Testkomponente />} {/* Correct placement of Testkomponente */}

        <Pfeilnav 
          setActiveComponent={setActiveComponent} 
          activeComponent={activeComponent}
        />

        <Foot />
      </motion.div>
    </>
  );
}

export default Main;
