import React, { useState } from "react";
import "./Ubungen.css";

function Ubungen_detail({ isVisible, item, onClose, gewicht }) {
    const [sliderValue, setSliderValue] = useState(0);
    const [calculatedValue, setCalculatedValue] = useState(0);

    if (!isVisible) return null; // Verstecke die Komponente, wenn nicht sichtbar

    const handleSliderChange = (value) => {
        setSliderValue(value);
        const roundValue = value / 60;
        const result = roundValue * (item?.MET * gewicht); // Berechne die verbrannten Kalorien
        setCalculatedValue(result);
    };

    const handleUbung = () => {
        setSliderValue(0)
        setCalculatedValue(0)

    }

    return (
        <div className="ubungenDetail"> {/* Klasse ist jetzt konsistent */}
            <div className="ubungenInformationen">
                <h2>Details zu {item?.id}</h2>
                <div className="ubungenInformationen2">
                <p>Kalorien pro Minute: {item?.kaloriepm}</p>
                <p>XP: {item?.XP}</p>
                <p>Verbrannte Kalorien: {calculatedValue.toFixed(2)}</p> {/* Mit 2 Dezimalstellen */}
                <p>(Test): MET-Wert {item?.MET}</p>
                </div>
            </div>

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

            <button onClick={handleUbung}>Übung hinzufügen</button>
            <button onClick={onClose}>Schließen</button>
        </div>
    );
}

export default Ubungen_detail;
