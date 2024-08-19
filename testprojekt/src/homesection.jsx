import React from 'react';
import "./homesection.css";
import Profile from "./Profile";
import Bottom from "./bottom"

function Home() {
  return (
    <div id="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home section of your application.</p>
      <Profile />
      <Bottom />
    </div>
  );
}

export default Home;
