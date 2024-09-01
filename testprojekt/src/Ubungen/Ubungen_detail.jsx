import React, { useState } from "react";
import "./Ubungen.css";

function Ubungen_detail({ isVisible, item, onClose }) {
    const [sliderValue, setSliderValue] = useState(0); // Zustand für den Schieberegler
    const [calculatedValue, setCalculatedValue] = useState(0); // Zustand für berechneten Wert

    if (!isVisible) return null; // Verstecke die Komponente, wenn nicht sichtbar

    const handleSliderChange = (value) => {
        setSliderValue(value);
        const result = value * (item?.kaloriepm || 0); // Berechne die verbrannten Kalorien
        setCalculatedValue(result);
    };

    return (
        <div className="ubungenDetail">
            <h2>Details zu {item?.id}</h2>
            <p>Kalorien pro Minute: {item?.kaloriepm}</p>
            <p>XP: {item?.XP}</p>
            <p>Verbrannte Kalorien: {calculatedValue}</p>

            {/* Schieberegler */}
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

            <button onClick={onClose}>Übung hinzufügen</button>
            <button onClick={onClose}>Schließen</button>
        </div>
    );
}

export default Ubungen_detail;
