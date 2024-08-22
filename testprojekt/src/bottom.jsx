import React, { useState } from 'react';
import "./bottom.css";

function Bottom() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Modale Fenster Komponente innerhalb von Bottom.jsx definiert
  function Modal() {
    return (
      <div className="modal" id="modal">
        <div className="modal-content">
          <span className="close-button" onClick={toggleModal}>&times;</span>
          <h2>Übungen</h2>
          <ul>
            <li className="tooltip" data-value="10">
              Laufen
              <span className="tooltiptext">10 Erfahrungspunkte</span>
            </li>
            <li className="tooltip" data-value="20">
              Spazieren
              <span className="tooltiptext">20 Erfahrungspunkte</span>
            </li>
            <li className="tooltip" data-value="30">
              Yoga
              <span className="tooltiptext">30 Erfahrungspunkte</span>
            </li>
            <li><button>Eigene Übung hinzufügen</button></li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div id="bottom">
      <button onClick={toggleModal}>Trainieren</button>
      <button>Statistik</button>
      {/* Modales Fenster wird direkt hier gerendert, wenn isModalOpen true ist */}
      {isModalOpen && <Modal />}
    </div>
  );
}

export default Bottom;
