import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home({scrollToProject}) {

  console.log(scrollToProject);
  return (
    <div className="home-wrap">
      

    <div className="home-container">
      
      <Navbar scrollToProject={scrollToProject} />

      <div className="home-main">


      <div className="h1 name">Dipesh Dulal</div>
      <div className="h2">Frontend Developer</div>
      <p className="home-content">
      Specializing in HTML, CSS, and JavaScript, with expertise in React.js, I deliver dynamic interfaces and intuitive, engaging user experiences through proficient UI/UX design.
      </p>

      {/* <img className="avatar-img" src="/newavatar.png" alt="avatar image" /> */}
      <img className="landscape-img" src="/landbg.png" alt="avatar image" />
      </div>
    </div>
    </div>
  );
}

export default Home;
