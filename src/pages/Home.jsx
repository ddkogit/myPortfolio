import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
function Home() {
  return (
    <div className="home-container">
      <Navbar />

      <div className="home-main">


      <div className="h1 name">Dipesh Dulal</div>
      <div className="h2">Frontend Developer</div>
      <p className="home-content">
        I develop websites using HTML, CSS and Javascript, specializing in
        creating dunamic interfaces with React.js.
      </p>

      <img className="avatar-img" src="/avatarbg.png" alt="avatar image" />
      <img className="landscape-img" src="/landbg.png" alt="avatar image" />
      </div>
    </div>
  );
}

export default Home;
