import React, { useState } from 'react';
import "./testkomponente.css";
import Abschluss from "./abschlussAi";
import Formular from "./formularAi";
import Text from "./textAi";

function Testkomponente({ grundumsatz, kalorie, trainingsdauer }) {
  // State to track which page is currently displayed
  const [seite, setSeitenwechsel] = useState("erklärung");

  // Function to navigate forward
  function blätternRechts() {
    if (seite === "erklärung") {
      setSeitenwechsel("formular");
    } else if (seite === "formular") {
      setSeitenwechsel("abschluss");
    } else if (seite === "abschluss") {
      // Disable the button if it's the last page (as an example, adjust logic as needed)
      // You could also manage the state of the button here.
      console.log("Reached the final page.");
    }
  }

  // Function to navigate backward
  function blätternLinks() {
    if (seite === "abschluss") {
      setSeitenwechsel("formular");
    } else if (seite === "formular") {
      setSeitenwechsel("erklärung");
    }
  }

  return (
    <>
      <div className="Formular">
        {/* Conditionally render components based on the current "seite" */}
        {seite === "erklärung" && <Text />}
        {seite === "formular" && <Formular grundumsatz={grundumsatz} kalorie={kalorie} trainingsdauer={trainingsdauer} />}
        {seite === "abschluss" && <Abschluss />}
      </div>
      <div className="Navigation">
        {/* Left button */}
        <button className="pfeilLinks" onClick={blätternLinks}>
          <img src="/path/to/your/left-arrow.png" alt="Previous" />
        </button>

        <div>
          <p>{seite}</p> {/* Displays the current page */}
        </div>

        {/* Right button */}
        <button className="pfeilRechts" onClick={blätternRechts}>
          <img src="/path/to/your/right-arrow.png" alt="Next" />
        </button>
      </div>
    </>
  );
}

export default Testkomponente;
