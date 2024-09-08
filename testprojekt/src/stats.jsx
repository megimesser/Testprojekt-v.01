import React from 'react';
import "./stats.css"

function Stats({grundumsatz, kalorie, trainingsdauer}) {
  return (
    <div id="stats">
        <h2>Kalorie : {kalorie}</h2>
        <h2>Trainingsdauer : {trainingsdauer} min</h2>
        <h2>Grundumsatz: {grundumsatz}</h2>
        
      
    </div>
  );
}

export default Stats;
