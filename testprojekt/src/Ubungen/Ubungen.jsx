import React, { useState, useEffect } from "react";
import "./Ubungen.css";
import Ubungen_einzeln from "./Ubungen_einzeln";
import { motion } from 'framer-motion';

function Ubungen({ setActiveComponent, gainXP }) {  
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Setzt die Animation beim Laden der Komponente auf true
  }, []);

  return (
    <motion.div
      animate={{ x: animate ? 0 : -1000 }} // Slide in from the left
      initial={{ opacity: 1, x: -1000 }}   // Initial state is off-screen
      transition={{ duration: 1 }}         // Animation duration of 1 second
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div className="ubungen">
        <div>
          <Ubungen_einzeln setActiveComponent={setActiveComponent} gainXP={gainXP} /> {/* Pass gainXP */}
        </div>
      </div>
    </motion.div>
  );
}

export default Ubungen;
