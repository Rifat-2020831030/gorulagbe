import React, { useEffect, useState } from "react";
import Background from "../components/Background/Background";
import Hero from "../components/hero/Hero";
import CattleList from "../components/cattle-list/CattleList";
import CategoryList from "../components/category/CategoryList";
import LiveAuction from "../components/live-auction/LiveAuction";
import ButcherList from "../components/butcher/butcherList/ButcherList";
import offer from "../assets/offer.png";
import Footer from "../components/footer/Footer";
import Recipe from "../components/recipe/recipeList/RecipeList";

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
      <CategoryList />
      <LiveAuction startTime = {"12-06-2024"} endTime={"14-06-2024"} info={""} />
      <ButcherList />
      <Recipe />
      <img style = {{...offerImage}}src={offer} alt="offer image" />
      <Footer />
    </div>
  );
}

const offerImage = {
  marginLeft: "10%", //
  width: "80%",
  height: "200px",
  marginTop: "30px",
  cursor: "pointer"
}

export default App;
