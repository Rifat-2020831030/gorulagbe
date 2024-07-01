import React from "react";
import "./CattleCard.css";


const CattleCard = ({ cattle , cow_image}) => {
  return (
    <div className="cattle-card">
      <img src={cow_image} alt={cattle.name} className="cattle-image" />
      <div className="cattle-info">
        <div className="cattle-header">
          <span className="cattle-id">COW{cattle.cattle_id}</span>
          {cattle.featured? <span className="cattle-featured">Featured</span>: null}
        </div>
        <h3>{cattle.gender}</h3>
        <p>Breed: {cattle.breed}</p>
        <div className="cattle-details">
          <span className={cattle.status?"available":"finished"}>{cattle.status? "Available":"Stock Out"}</span>
          <span className="size">Age: {cattle.age}</span>
          <span className="price">৳ {cattle.price}</span>
        </div>
        <button className="details-button">See Details</button>
      </div>
    </div>
  );
};

export default CattleCard;
