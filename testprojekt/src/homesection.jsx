import React, { useState, useEffect } from 'react';
import "./homesection.css";
import "./background.css";
import Profile from "./Profile";
import Bottom from "./bottom";
import Ladebalken from "./ladebalken";
import Stats from "./stats";

function Home({ gainXP }) { // Accept gainXP as a prop
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
  }, [xp1, xp2]); // Ensure effect runs when xp1 or xp2 changes

  return (
    <div id="home">
      {/* Pass the leveln prop to Profile */}
      <Profile leveln={leveln} />
      <hr />
      {/* Pass xp1 and xp2 to Ladebalken component */}
      <Ladebalken xp1={xp1} xp2={xp2} />
      <Stats kalorie={kalorie} grundumsatz={grundumsatz} trainingsdauer={trainingsdauer} />
      <Bottom />

      {/* Simulate gaining XP on button click */}
      <button onClick={() => gainXP(10)}>Gain 10 XP</button>
    </div>
  );
}

export default Home;
