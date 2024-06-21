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
    title: "Sketch Board",
    imgUrl: "sketch.png",
    webLink: "https://ddkogit.github.io/etch-a-sketch/",
  },
  {
    title: "Comming Soon",
    imgUrl:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2Vic2l0ZXx8fHx8fDE3MDkxMzE0MTQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    webLink: "#",
  },
  {
    title: "Comming Soon",
    imgUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2Vic2l0ZXx8fHx8fDE3MDkxMzE0MDk&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    webLink: "#",
  },
  {
    title: "Comming Soon",
    imgUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2Vic2l0ZXx8fHx8fDE3MDkxMzE0MDY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
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
