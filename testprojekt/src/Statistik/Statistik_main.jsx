import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Statistik.css";

function Statistik_main() {
  const [animate, setAnimate] = useState(true); // Manage animation state

  useEffect(() => {
    // Example: Set animation to true when component mounts
    setAnimate(true);
  }, []);

  return (
    <motion.div
      animate={{ x: animate ? 0 : -1000 }} // Animate to x:0 when animate is true
      initial={{ opacity: 1, x: -1000 }} // Initial state
      transition={{ duration: 1 }} // Animation duration of 1 second
      style={{ display: 'flex', flexDirection: 'column' }} // Ensure the div is displayed properly
    >
      <div className="Statistik_main">
        <div className="scrollMenu">
          {/* Beispiel-Inhalte zum Scrollen */}
          <div className="scrollItem">Item 1</div>
          <div className="scrollItem">Item 2</div>
          <div className="scrollItem">Item 3</div>
          <div className="scrollItem">Item 4</div>
          <div className="scrollItem">Item 5</div>
          <div className="scrollItem">Item 6</div>
          <div className="scrollItem">Item 7</div>
          <div className="scrollItem">Item 8</div>
          <div className="scrollItem">Item 9</div>
          <div className="scrollItem">Item 10</div>
        </div>
      </div>
    </motion.div>
  );
}

export default Statistik_main;

