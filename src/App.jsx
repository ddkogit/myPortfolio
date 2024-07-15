import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import CardList from "./pages/CardList";
import Contactme from "./pages/Contactme/Contactme";
import Skills from "./components/Skills";
import Ending from "./pages/Ending";

const projectList = [
  {
    title: "Poke World",
    imgUrl: "pokeworld.png",
    webLink: "https://poke-world-three.vercel.app/",
  },
  {
    title: "Saiyans Club",
    imgUrl: "saiyansclub.png",
    webLink: "https://saiyansclub.vercel.app/",
  },
  {
    title: "MC Quiz",
    imgUrl:"mcq.png",
    webLink: "https://afblockchaingame.com",
  },
  {
    title: "Pic Polish",
    imgUrl:
      "picpolish.png",
    webLink: "https://pic-polish.vercel.app/",
  },
  {
    title: "Sketch Board",
    imgUrl: "sketch.png",
    webLink: "https://ddkogit.github.io/etch-a-sketch/",
  },
 
  {
    title: "RSVP HK",
    imgUrl:
      "rsvphk.png",
    webLink: "#",
  },
];

function App() {
  const [showContact, setShowcontact] = useState(true);
  const [projects, setProjects] = useState(projectList);

  const handleClose = () => {
    setShowcontact(false);
  };

  return (
    <>
      <div className="app-container">
        <Home />
        <Skills />

        <div id="scroll-id">
          <CardList projects={projects} />
        </div>

        <Ending />
      </div>
    </>
  );
}

export default App;
