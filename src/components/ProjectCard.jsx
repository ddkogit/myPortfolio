import React from 'react'
import "./ProjectCard.css"
import {LazyLoadImage} from "react-lazy-load-image-component"

function ProjectCard({title,imgUrl,webLink}) {

    return (
    <div>


<a href={webLink} target='_blank'>

<LazyLoadImage className='card-image' src={imgUrl} alt="Project Screenshot" />
</a>

<p className='project-title' >{title}</p>
    </div>
  )
}

export default ProjectCard