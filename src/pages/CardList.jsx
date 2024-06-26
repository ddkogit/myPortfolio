import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./CardList.css";

function CardList({ projects }) {
 
  return (
    <div   className="card-list-container">
      <div className="h2">My Projects</div>
      <p>I've been involved in several projects. Here are some examples.</p>
      <div className="card-container">
        {projects.map((project) => (
          <ProjectCard key={project.title} imgUrl={project.imgUrl} title={project.title} webLink={project.webLink}/>
        ))}
      </div>
    </div>
  );
}

export default CardList;
