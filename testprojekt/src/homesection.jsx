import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importiere Framer Motion
import "./homesection.css";
import "./background.css";
import Profile from "./Profile";
import Bottom from "./bottom";
import Ladebalken from "./ladebalken";
import Stats from "./stats";

function Home({ gainXP }) { 
  // Using state to manage xp1, xp2, and level
  const [xp1, setXp1] = useState(0);
  const [xp2, setXp2] = useState(50);
  const [leveln, setLevel] = useState(1);

  // Variablen für Kalorie / Trainingsdauer und Grundumsatz 
  const [kalorie, setKalorie] = useState(0); 
  const [grundumsatz, setGrundumsatz] = useState(0); 
  const [trainingsdauer, setTrainingsdauer] = useState(0); 

  // Function to handle leveling up
  function level() {
    if (xp1 >= xp2) {
      setXp2(xp2 + xp2 * 1.2); // Increase xp2 by 20% when level up
      setXp1(0); // Reset xp1 to 0 after leveling up
      setLevel(prevLevel => prevLevel + 1); // Increment level
    }
  }

  // Increase XP on user action or event
  function gainXP(amount) {
    setXp1(prevXp => prevXp + amount);
  }

  // Automatically call the level function when xp1 changes
  useEffect(() => {
    if (xp1 >= xp2) {
      level();
    }
  }, [xp1, xp2]);

  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, x: -100 }} // Initial state (invisible and shifted left)
      animate={{ opacity: 1, x: 0 }}    // Final state (fully visible and in place)
      transition={{ duration: 1 }}       // Animation duration
    >
      {/* Animated Profile component */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }} // Start with smaller size and opacity
        animate={{ scale: 1, opacity: 1 }}   // Full size and opacity
        transition={{ duration: 0.5 }}       // Slight delay for the profile
      >
        <Profile leveln={leveln} />
      </motion.div>

      <hr />

      {/* Animated Ladebalken */}
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Slide in from the top
        animate={{ opacity: 1, y: 0 }}   // Normal position
        transition={{ duration: 0.5, delay: 0.2 }} // Delay slightly to give time for Profile
      >
        <Ladebalken xp1={xp1} xp2={xp2} />
      </motion.div>

      {/* Animated Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}  // Slide in from the bottom
        animate={{ opacity: 1, y: 0 }}   // Normal position
        transition={{ duration: 0.5, delay: 0.4 }} // Delay more for a staggered effect
      >
        <Stats kalorie={kalorie} grundumsatz={grundumsatz} trainingsdauer={trainingsdauer} />
      </motion.div>

      {/* Animated Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }} // Delay even more for the last element
      >
        <Bottom />
      </motion.div>

      {/* Animated Button */}
      <motion.button
        onClick={() => gainXP(10)}
        whileHover={{ scale: 1.1 }}      // Grow slightly on hover
        whileTap={{ scale: 0.9 }}        // Shrink slightly on tap
        style={{ marginTop: "20px" }}
      >
        Gain 10 XP
      </motion.button>
    </motion.div>
  );
}

export default Home;
