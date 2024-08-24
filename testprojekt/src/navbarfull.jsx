import React, { useState } from 'react';
import './navbarfull.css';
import Navbar from './navbar';
import Sidemenu from './sidemenu';

function NavbarFull() {
    const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

    const toggleSideMenu = () => {
        setIsSideMenuVisible(!isSideMenuVisible);
        console.log("Funktion läuft. Neuer Zustand:", !isSideMenuVisible);  // Zustand anzeigen
    };

    return (
        <div id="navbarFull">
            <Navbar toggleSideMenu={toggleSideMenu} />
            <Sidemenu isVisible={isSideMenuVisible} />
        </div>
    );
}

export default NavbarFull;
