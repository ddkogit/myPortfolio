import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import SkillCard from "./components/SkillCard";
import CardList from "./pages/CardList";

import { Link,animateScroll  } from "react-scroll";
import Ending from "./pages/Ending";

const projectList = [
  {
    title: "project 1",
    imgUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "project 2",
    imgUrl:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2Vic2l0ZXx8fHx8fDE3MDkxMzE0MTQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    title: "project 3",
    imgUrl:
      "https://images.unsplash.com/photo-1497005367839-6e852de72767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2Vic2l0ZXx8fHx8fDE3MDkxMzE0MTM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    title: "project 4",
    imgUrl:
      "https://images.unsplash.com/photo-1552664688-cf412ec27db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2Vic2l0ZXx8fHx8fDE3MDkxMzE0MTI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    title: "project 5",
    imgUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2Vic2l0ZXx8fHx8fDE3MDkxMzE0MDk&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    title: "project 6",
    imgUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2Vic2l0ZXx8fHx8fDE3MDkxMzE0MDY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
];

function App() {
  const [projects, setProjects] = useState(projectList);

  
  return (
    <>

      <Home  />
      <SkillCard />
      <div id="scroll-id">
      <CardList projects={projects}/>
    </div>

    <Ending />
     
    </>
  );
}

export default App;
