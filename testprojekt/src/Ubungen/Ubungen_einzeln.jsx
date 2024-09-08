import React, { useState } from "react";
import "./Ubungen.css";
import Ubungen_detail from "./Ubungen_detail";

function Ubungen_einzeln({ setActiveComponent, gainXP }) {  // Receive gainXP
  const [showDetails, setShowDetails] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [gewicht, setGewicht] = useState(90); 

  const ubungsElemente = [
    { id: "Laufen", kaloriepm: 3, XP: 30, MET: 7 },
    { id: "Rennen", kaloriepm: 5, XP: 30, MET: 10 },
    { id: "Seilspringen", kaloriepm: 3, XP: 30, MET: 12 },
  ];

  const handleButtonClick = (ubungsItem) => {
    setSelectedItem(ubungsItem); 
    setShowDetails(true); 
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="ubungen">
      <div className="biometrie"></div>
      <div>Gewicht: {gewicht}</div>

      <div>
        <Ubungen_detail 
          setActiveComponent={setActiveComponent}
          isVisible={showDetails}
          item={selectedItem}
          onClose={handleCloseDetails}
          gewicht={gewicht} 
          gainXP={gainXP}  
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
