import React from 'react'
import ProjectCard from '../components/ProjectCard'

function CardList({projects}) {
  return (
    <div>
        {
          projects.map((project)=>(
            <ProjectCard />
          ))
        }
    </div>
  )
}

export default CardList