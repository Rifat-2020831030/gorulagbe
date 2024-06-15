import React, { useEffect, useState } from "react";
import offer from "../assets/offer.png";
import Background from "../components/Background/Background";
import AuthController from "../components/auth/auth controller/Auth.Controller";
import ButcherList from "../components/butcher/butcherList/ButcherList";
import CategoryList from "../components/category/CategoryList";
import CattleList from "../components/cattle-list/CattleList";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import LiveAuction from "../components/live-auction/LiveAuction";
import Recipe from "../components/recipe/recipeList/RecipeList";

function App() {

  let [heroIndex, setHeroIndex] = useState(0);
  let [isVisible, setIsVisible] = useState(false);
  let [page, setPage] = useState("");

  useEffect(() => {
    setInterval(() => {
      setHeroIndex((heroIndex) => {
        return heroIndex === 2 ? 0 : heroIndex + 1;
      });
    }, 3000);
  }, []);

  return (
    <div className="main">
      <Background heroIndex={heroIndex} setIsVisible={setIsVisible} setPage={setPage}></Background>
      {/* <Navbar></Navbar> */}
      <Hero
        heroIndex={heroIndex}
        setHeroIndex={setHeroIndex}
      ></Hero>
      <div className="cattle-list-container">
        <CattleList />
      </div>
      <CategoryList />
      <LiveAuction startTime={"12-06-2024"} endTime={"14-06-2024"} info={""} />
      <ButcherList />
      <Recipe />
      <img style={{ ...offerImage }} src={offer} alt="offer image" />
      <Footer />
      
      {/* show the authentication page if isvisible is true */}
      {isVisible && <AuthController page={page} setIsVisible={setIsVisible} />}

      
    </div>
  );
}

const offerImage = {
  marginLeft: "10%",
  width: "80%",
  height: "200px",
  marginTop: "30px",
  cursor: "pointer",
};

export default App;
