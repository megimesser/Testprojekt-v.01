import React from 'react';
import "./ladebalken.css";

function Ladebalken({ xp1, xp2 }) {
  // Calculate the percentage of progress (xp1 relative to xp2)
  const progressPercentage = (xp1 / xp2) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar">
        {/* Dynamically set the width based on progress */}
        <div className="lava-container" style={{ width: `${progressPercentage}%` }}>
          <div className="lava"></div>
        </div>
      </div>
    </div>
  );
}

export default Ladebalken;
