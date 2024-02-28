import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import SkillCard from './components/SkillCard'
import CardList from './pages/CardList'


const projectList=[
  {
    name:"project 1",
    imgUrl:"url"
  },
  {
    name:"project 2",
    imgUrl:"url"
  },
  {
    name:"project 3",
    imgUrl:"url"
  },
  {
    name:"project 4",
    imgUrl:"url"
  },
  {
    name:"project 5",
    imgUrl:"url"
  },
  {
    name:"project 6",
    imgUrl:"url"
  },
]


function App() {
  const [projects, setProjects] = useState(projectList)

  return (
   <>
   <Home />
   <SkillCard />
   <CardList projects={projects} />
   </>
  )
}

export default App
