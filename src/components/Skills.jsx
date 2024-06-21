import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <div className="banner">
        <div className="slider" style={{ "--quantity": 8 }}>
          <img
            className="item"
            style={{ "--position": 1 }}
            src="/js.jpg"
            alt="avatar image"
          />
          <img
            className="item"
            style={{ "--position": 2 }}
            src="/html.jpg"
            alt="avatar image"
          />
          <img
            className="item"
            style={{ "--position": 3 }}
            src="/css.jpg"
            alt="avatar image"
          />
          <img
            className="item"
            style={{ "--position": 4 }}
            src="/react.jpg"
            alt="avatar image"
          />
          <img
            className="item"
            style={{ "--position": 5 }}
            src="/git.jpg"
            alt="avatar image"
          />
          <img
            className="item"
            style={{ "--position": 6 }}
            src="/node.jpg"
            alt="avatar image"
          />
          <img
            className="item"
            style={{ "--position": 7 }}
            src="/figma.png"
            alt="avatar image"
          />
          <img
            className="item"
            style={{ "--position": 8 }}
            src="/next.png"
            alt="avatar image"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
