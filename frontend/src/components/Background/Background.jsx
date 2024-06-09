import React from "react";
import bg3 from "../../assets/butcher.jpg";
import bg1 from "../../assets/cow.png";
import bg2 from "../../assets/meat.jpg";
import "./Background.css";

const Background = ({ heroIndex }) => {
  if (heroIndex === 0) {
    return (
      <div className="background">
        <img
          className="background fade-in"
          src={bg1}
          alt="Background Image 1"
        />
      </div>
    );
  } else if (heroIndex === 1) {
    return (
      <div className="background">
        <img
          className="background fade-in"
          src={bg2}
          alt="Background Image 2"
        />
      </div>
    );
  } else if (heroIndex === 2) {
    return (
      <div className="background">
        <img
          className="background fade-in"
          src={bg3}
          alt="Background Image 3"
        />
      </div>
    );
  }
};

export default Background;
