import React from "react";
import "./CattleCard.css";


const CattleCard = ({ cattle , cow_image}) => {
  return (
    <div className="cattle-card">
      <img src={cow_image} alt={cattle.name} className="cattle-image" />
      <div className="cattle-info">
        <div className="cattle-header">
          <span className="cattle-id">{cattle.id}</span>
          {cattle.featured && <span className="cattle-featured">Featured</span>}
        </div>
        <h3>{cattle.name}</h3>
        <p>{cattle.description}</p>
        <div className="cattle-details">
          <span className={cattle.available?"available":"finished"}>{cattle.available===true? "Available":"Stock Out"}</span>
          <span className="size">{cattle.size}</span>
          <span className="price">৳ {cattle.price}</span>
        </div>
        <button className="details-button">See Details</button>
      </div>
    </div>
  );
};

export default CattleCard;
