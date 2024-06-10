import React from "react";
import "./Butcher.css";

const Butcher = ({image, info}) => {
  return (
    <>
      <div className="butcher-card">
        <img className="butcher-image" src={image} alt={info.name} />
        <h4>{info.name}</h4>
        <div className="butcher-info">
        <span className="available" style={{backgroundColor: "yellow", color: "black"}}>Location : {info.location}</span>
        <span className="available">Rate : {info.rate}</span>
        </div>
        {/* <p>Rating : {info.rating}</p> */}
          <button className="details-button">See Details</button>
      </div>
    </>
  );
};

export default Butcher;

// info
// rate
// image
// name
// location
// rating
