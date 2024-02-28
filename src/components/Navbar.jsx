import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar({ scrollToProject }) {
  const handleClick = () => {
    // scrollToProject();
  };
  return (
    <div>
      <nav className="navbar">
        <div>
          <button className="logo">D</button>
        </div>

        <div>
        
            
            <Link  className="nav-projects" to="scroll-id" smooth duration={500}>Projects</Link>
          <button className="hireme-button">Hier me</button>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
