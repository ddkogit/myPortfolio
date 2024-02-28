import React from 'react'
import "./ProjectCard.css"
import {LazyLoadImage} from "react-lazy-load-image-component"

function ProjectCard({title,imgUrl}) {

    return (
    <div>



<LazyLoadImage className='card-image' src={imgUrl} alt="Project Screenshot" />

<p className='project-title' >{title}</p>
    </div>
  )
}

export default ProjectCard