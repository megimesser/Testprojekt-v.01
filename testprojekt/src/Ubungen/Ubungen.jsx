import React from "react";
import "./Ubungen.css";
import Ubungen_einzeln from "./Ubungen_einzeln";

function Ubungen({ setActiveComponent, gainXP }) {  // Receive gainXP
  return (
    <div className="ubungen">
      <div>
        <Ubungen_einzeln setActiveComponent={setActiveComponent} gainXP={gainXP} /> {/* Pass gainXP */}
      </div>
    </div>
  );
}

export default Ubungen;
