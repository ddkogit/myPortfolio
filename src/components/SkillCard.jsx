import React from "react";
import "./SkillCard.css";

function SkillCard() {
  return (
    <div className="skill-container">
      <div className="h2">Frontend Developer</div>
      <p className="tech-description">
        "I enjoy building things from the ground up and bringing ideas to life
        on the web"
      </p>

      <div className="tech-title">Technologies</div>

      <ul>
        <li>
            JavaScript
        </li>
        <li>
            React js
        </li>
        <li>
            Redux
        </li>
        <li>
            SQL
        </li>
        <li>
            Mongo DB
        </li>
        <li>
            GitHub
        </li>
        <li>
            HTML 5
        </li>
        <li>
            CSS 3
        </li>
      </ul>
    </div>
  );
}

export default SkillCard;
