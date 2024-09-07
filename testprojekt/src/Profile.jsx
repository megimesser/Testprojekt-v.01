import React from 'react';
import "./Profile.css";

function Profile({ leveln }) {
  return (
    <div id="profile">
      <h1>Name</h1>
      <div>
        {/* Use curly braces to inject the leveln prop */}
        <h2>Level: {leveln}</h2>
        <h2>Streak: 1</h2>
      </div>
      <img src="/images/Cat03.jpg" alt="Profile" />
    </div>
  );
}

export default Profile;
