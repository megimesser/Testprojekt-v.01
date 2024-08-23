import React from 'react';
import "./homesection.css";
import "./background.css"
import Profile from "./Profile";
import Bottom from "./bottom"
import Ladebalken from "./ladebalken"
import Stats from "./stats"


function Home() {
  return (
   
   
    <div id="home">
      
      <Profile />
      <hr></hr>
      <Ladebalken />
      <Stats />
      <Bottom />
    </div>
    
   
  );
}

export default Home;
