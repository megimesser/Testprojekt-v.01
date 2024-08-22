import React from 'react';
import "./homesection.css";
import Profile from "./Profile";
import Bottom from "./bottom"
import Ladebalken from "./ladebalken"

function Home() {
  return (
    <>
    <div id = "background">
    <div id="home">
      
      <Profile />
      <hr></hr>
      <Ladebalken />
      <Bottom />
    </div>
    </div>
    </>
  );
}

export default Home;
