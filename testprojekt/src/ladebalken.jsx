import React from 'react';
import "./ladebalken.css";

function Ladebalken({ xp1, xp2 }) {


  // Calculate the percentage of progress (handle xp2 = 0 edge case)
  const progressPercentage = xp2 > 0 ? Math.round((xp1 / xp2) * 100) : 0;

  // Ensure the progress percentage stays between 0 and 100
  const clampedProgress = Math.min(100, Math.max(0, progressPercentage));
  console.log('Current XP (xp1):', xp1);
console.log('Total XP needed (xp2):', xp2);
console.log('Calculated Progress Percentage:', progressPercentage);

  return (
    
    <div className="progress-container" aria-label={`XP Progress: ${clampedProgress}%`}>
      <div className="progress-bar">
        <p className="progress-percentage">{clampedProgress}%</p>
        {/* Dynamically set the width based on clamped progress */}
        <div className="lava-container" style={{ width: `${clampedProgress}%` }}>
          <div className="lava"></div>
        </div>
      </div>
    </div>
  );
}

export default Ladebalken;
