import { motion } from "framer-motion";  
import Navbar from "./Navbar";  
import Sidemenu from "./sidemenu";  
import React from "react";  

function Navbarfull({ setActiveComponent, activeComponent }) {  // Destructure props correctly
  return (
    <div id="navbarFull">
      <>
        <motion.div
          animate={{
            opacity: 1,
            y: 0,  
          }}
          initial={{
            opacity: 0.1,
            y: -1000,
          }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          {/* Pass setActiveComponent to Sidemenu */}
          <Sidemenu setActiveComponent={setActiveComponent} />  
        </motion.div>
      </>
    </div>
  );
}

export default Navbarfull;
