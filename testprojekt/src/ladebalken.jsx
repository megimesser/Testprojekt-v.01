import React from 'react';
import "./ladebalken.css";

function Ladebalken({ xp1, xp2 }) {
  // Calculate the percentage of progress (xp1 relative to xp2)
  const progressPercentage = Math.round((xp1 / xp2) * 100);
  console.log(progressPercentage)
  

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <p className="progress-percentage">{progressPercentage} %</p>
        {/* Dynamically set the width based on progress */} 
        <div className="lava-container" style={{ width: `${progressPercentage}%` }}>
          <div className="lava"></div>
        </div>
      </div>
    </div>
  );
}

export default Ladebalken;
