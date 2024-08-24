import "./sidemenu.css"


function SideMenu({ isVisible }) {
    console.log("SideMenu Sichtbarkeit:", isVisible);
    return (
      <div
        className="sidemenu"
        style={{ display: isVisible ? 'block' : 'none' }} 
      >

        <div className = "paddingContainer">

        <div className = "userSectionNav">
            <img src="/images/Cat03.jpg"></img>
            <h3>Username</h3>
        </div>

        <ul>
            <li>Profil</li>
            <li>Leaderboard</li>
            <li>Einstellungen</li>
            <li>Statistik</li>
        </ul>

        </div>
      </div>
    );
  }
  
  export default SideMenu;