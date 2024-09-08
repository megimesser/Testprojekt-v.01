import React, { useState } from "react";
import "./Ubungen.css";

function Ubungen_detail({ isVisible, item, onClose, gewicht, setActiveComponent, gainXP }) {  // Receive gainXP
  const [sliderValue, setSliderValue] = useState(0);
  const [calculatedValue, setCalculatedValue] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  const inlineStyle = {
    fontSize: "1rem",
    color: "red",
    fontWeight: "bold",
    display: showWarning ? "block" : "none"
  };

  if (!isVisible) return null; 

  const handleSliderChange = (value) => {
    setSliderValue(value);
    const roundValue = value / 60;
    const result = roundValue * (item?.MET * gewicht);
    setCalculatedValue(result);
    setShowWarning(value === 0);
  };

  const handleUbung = () => {
    if (sliderValue === 0) {
      setShowWarning(true);
    } else {
        console.log(item?.XP)
      setSliderValue(0);
      setCalculatedValue(0);
      setShowWarning(false);

      gainXP(item?.XP);  // Gain XP when an exercise is added
      setActiveComponent('home');  // Navigate to the 'statistik' page
    }
  };

  return (
    <div className="ubungenDetail">
      <div className="ubungenInformationen">
        <h2>Details zu {item?.id}</h2>
        <div className="ubungenInformationen2">
          <p>Kalorien pro Minute: {item?.kaloriepm}</p>
          <p>XP: {item?.XP}</p>
          <p>Verbrannte Kalorien: {calculatedValue.toFixed(2)}</p>
          <p>(Test): MET-Wert {item?.MET}</p>
        </div>
      </div>

      <div style={inlineStyle}>
        <p>Die Trainingsdauer muss größer 0 sein</p>
      </div>

      <div>
        <label htmlFor="slider">Dauer in Minuten:</label>
        <input
          type="range"
          id="slider"
          min="0"
          max="240"
          value={sliderValue}
          onChange={(e) => handleSliderChange(parseFloat(e.target.value))}
        />
        <p>Minuten: {sliderValue}</p>
      </div>

      <button onClick={handleUbung}>Übung hinzufügen</button>
      <button onClick={onClose}>Schließen</button>
    </div>
  );
}

export default Ubungen_detail;
