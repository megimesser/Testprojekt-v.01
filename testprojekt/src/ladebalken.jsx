import React from 'react';
import "./ladebalken.css";

function Ladebalken() {
  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div className="lava-container">
          <div className="lava"></div>
        </div>
      </div>
    </div>
  );
}

export default Ladebalken;
