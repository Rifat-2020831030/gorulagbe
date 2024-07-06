import React from "react";
import { useNavigate } from 'react-router-dom';
import "./CattleCard.css";
import Details from "../../pages/Details";


const CattleCard = ({ cattle , cow_image}) => {
  const navigate = useNavigate();
  return (
    <div className="cattle-card" onClick = {() => navigate(`/cattle-details/${cattle.cattle_id}`,
      {
        state: cattle
      }
    ) }>
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
