import React, { useState } from 'react';
import "./testkomponente.css";


function Text({ grundumsatz, kalorie, trainingsdauer }) {
  // State to track which page is currently displayed



  return (
    <>
      <div className="textAiForm">
        <h1>Dein AI-Trainer</h1>
        <h3>Was ist AI- Trainer</h3>
        <p>AI Trainer ist eine trainierte KI, welche auf Basis deiner 
            Eingaben, Dir den optimalen Trainingsplan erstellt
        </p>
        <h3>Was benötige ich für das Training?</h3>
        <p>Du benötigst nichts für das Training, lediglich deinen Körper und etwas Zeit</p>
        
      </div>
    </>
  );
}

export default Text ;
