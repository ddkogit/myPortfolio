import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar({ scrollToProject}) {

  const handleContact =()=>{
    window.location.href = 'mailto:dipeshdulal56@gmail.com?subject=Hello Dipesh &body=Hello, I would like to contact you.';

  }
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
          <button 
          onClick={handleContact}
          className="hireme-button">Hire me</button>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
