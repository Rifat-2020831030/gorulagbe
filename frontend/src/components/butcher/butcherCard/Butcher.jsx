import React from "react";
import "./Butcher.css";

const Butcher = ({image, butcher}) => {
  return (
    <>
      <div className="butcher-card">
        <img className="butcher-image" src={image} alt={butcher.username} />
        <h4>{butcher.username}</h4>
        <div className="butcher-butcher">
        <span className="available" style={{backgroundColor: "yellow", color: "black"}}>Location : {butcher.district}</span>
        <span className="available">Rate : {butcher.rate} <i>per cow</i></span>
        </div>
        {/* <p>Rating : {butcher.rating}</p> */}
          <button className="details-button">See Details</button>
      </div>
    </>
  );
};

export default Butcher;

// butcher
// rate
// image
// name
// location
// rating
