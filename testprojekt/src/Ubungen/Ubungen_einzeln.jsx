import React, { useState } from "react";
import "./Ubungen.css";
import Ubungen_detail from "./Ubungen_detail";

function Ubungen_einzeln() {
    const [showDetails, setShowDetails] = useState(false); // Zustand zum Steuern der Sichtbarkeit des Detailfensters
    const [selectedItem, setSelectedItem] = useState(null); // Zustand für das aktuell ausgewählte Übungselement
    const [gewicht, setGewicht] = useState(90)

    const ubungsElemente = [
        { id: "Laufen", kaloriepm: 3, XP: 30, MET:7 },
        { id: "Rennen", kaloriepm: 5, XP: 30, MET: 10 },
        { id: "Seilspringen", kaloriepm: 3, XP: 30, MET: 12 },
        { id: "Seilspringen", kaloriepm: 3, XP: 30, MET:12 }
    ];

    const handleButtonClick = (ubungsItem) => {
        setSelectedItem(ubungsItem); // Setze das ausgewählte Übungselement
        setShowDetails(true); // Zeige das Detailfenster an
    };

    const handleCloseDetails = () => {
        setShowDetails(false); // Verstecke das Detailfenster
    };

    return (
        <div className="ubungen">
            <div className ="biometrie"></div>
            <div>Gewicht : {gewicht}</div>
            <div>gewicht</div>
            
            <div>
                {/* Übergib die notwendigen Props an die Kindkomponente */}
                <Ubungen_detail 
                    isVisible={showDetails}
                    item={selectedItem}
                    onClose={handleCloseDetails}
                />
                <ul className="ubungsListe">
                    {ubungsElemente.map((ubungsItem) => (
                        <li
                            className="ubungsListeElement"
                            key={ubungsItem.id}
                            onClick={() => handleButtonClick(ubungsItem)}
                        >
                            {ubungsItem.id} : {ubungsItem.XP} XP
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Ubungen_einzeln;

