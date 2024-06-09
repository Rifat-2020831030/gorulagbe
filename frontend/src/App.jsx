import React, { useEffect, useState } from "react";
import "./App.css";
import Background from "./components/Background/Background";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

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
    <div>
      <Background heroIndex={heroIndex}></Background>
      <Navbar></Navbar>
      <Hero heroIndex={heroIndex} setHeroIndex = {setHeroIndex} headingText={headingText[heroIndex]}></Hero>
    </div>
  );
}

export default App;
