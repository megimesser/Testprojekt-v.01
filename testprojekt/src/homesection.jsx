import React from 'react';
import "./homesection.css";
import "./background.css"
import Profile from "./Profile";
import Bottom from "./bottom"
import Ladebalken from "./ladebalken"


function Home() {
  return (
   
   
    <div id="home">
      
      <Profile />
      <hr></hr>
      <Ladebalken />
      <Bottom />
    </div>
    
   
  );
}

export default Home;
