import React from 'react';
import "./navigationsmenü.css";

function Breadcrump({ activeComponent }) {  // Accept activeComponent as a prop

  // Determine the color of the circles based on the active page
  const getCircleColor = (page) => {
    return activeComponent === page ? "aqua" : "grey"; // Active page gets "blue", others "grey"
  };

  const boldFont = (page) => {
    return activeComponent === page ? "bold" : "normal"
  }

  return (
    <div className="wrapperBC">
      {/* Circle 1 - Übungen */}
      <div
        id="kreis1"
        className="kreis"
        style={{ backgroundColor: getCircleColor("ubungen") }}
      ></div>
      <div
      style ={{fontWeight: boldFont("ubungen")}}
      >Übungen</div>

      {/* Circle 2 - Home */}
      <div
        id="kreis2"
        className="kreis"
        style={{ backgroundColor: getCircleColor("home") }}
      ></div>
      <div
      style ={{fontWeight: boldFont("home")}}
      >Home</div>

      {/* Circle 3 - Statistik */}
      <div
        id="kreis3"
        className="kreis"
        style={{ backgroundColor: getCircleColor("statistik") }}
      ></div>
      <div
      style ={{fontWeight: boldFont("statistik")}}
      >Statistik</div>
    </div>
  );
}

export default Breadcrump;
