// src/components/Background/Background.js
import React from "react";
import bg3 from "../../assets/butcher.jpg";
import bg1 from "../../assets/cow.png";
import bg2 from "../../assets/meat.jpg";
import Navbar from "../navbar/Navbar";
import "./Background.css";

const Background = ({ heroIndex , setIsVisible, setPage}) => {
  let bgImage = bg1;
  if (heroIndex === 1) bgImage = bg2;
  if (heroIndex === 2) bgImage = bg3;

  return (
    <>
      {/* <Navbar setIsVisible={setIsVisible} setPage={setPage}></Navbar> */}
      <div className="background">
        <img className="background fade-in" src={bgImage} alt="Background" />
      </div>
    </>
  );
};

export default Background;
