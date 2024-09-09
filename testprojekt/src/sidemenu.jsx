import React from 'react';
import "./sidemenu.css";

function Sidemenu({ setActiveComponent, activeComponent }) {  // Props müssen als Objekt deconstructed werden
  return (
    <div id="sidemenu">
        <ul>
            <li>Profil</li>
            <li>Leaderboard</li>
            <li onClick={() => setActiveComponent('test')}>AI - Training</li>  {/* AI - Training ruft Testkomponente auf */}
            <li>Account</li>
            <li>Einstellungen</li>
        </ul>
    </div>
  );
}

export default Sidemenu;
