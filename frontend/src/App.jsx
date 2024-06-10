import React, { useEffect, useState } from "react";
import "./App.css";
import Background from "./components/Background/Background";
import Cattle from "./components/cattle-card/CattleCard";
import Hero from "./components/hero/Hero";
import CattleList from "./components/cattle-list/CattleList";

function App() {
  // state
  const headingText = [
    {
      heading: `Choose cow `,
      subheading:`From a variety of collections`,
      buttontxt: "Explore Now",
    },
    {
      heading: "Get the best quality of meat",
      subheading: `From the whole country`,
      buttontxt: "Order Now",
    },
    {
      heading: "Get certified butcher",
      subheading: `For hustle free processing`,
      buttontxt: "Hire Now",
    },
  ];
  let [heroIndex, setHeroIndex] = useState(0);

  useEffect(()=>{
    setInterval(() => {
      setHeroIndex(
        (heroIndex)=> {return (heroIndex===2 ? 0 : heroIndex+1)}
      )
    }, 3000);
  },[])

  return (
    <div className="main">
      <Background heroIndex={heroIndex}></Background>
      {/* <Navbar></Navbar> */}
      <Hero heroIndex={heroIndex} setHeroIndex = {setHeroIndex} headingText={headingText[heroIndex]}></Hero>
      <div className="cattle-list-container">
        <CattleList />
      </div>
    </div>
  );
}

export default App;
