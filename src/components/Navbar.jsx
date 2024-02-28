import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div>
          <button className="logo">D</button>
        </div>

        <div>
          <span className="nav-projects">Projects</span>

          <button className="hireme-button">Hier me</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
