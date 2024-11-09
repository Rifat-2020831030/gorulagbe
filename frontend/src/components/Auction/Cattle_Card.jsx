import React, { useState } from "react";
import "./Cattle_Card.css";
const performDatabaseOperation = async (id) => {
  // Replace with your actual database logic
  console.log(`Performing database operation for card with id: ${id}`);
  // Simulate a delay
  return new Promise((resolve) => setTimeout(resolve, 1000));
};
const Cattle_Card = ({ cattle, cattleimage }) => {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCardClick = async (id) => {
    setSelectedCardId(id);
    setLoading(true);
    setError(null);

    try {
      await performDatabaseOperation(id);
      console.log(`Card with id: ${id} has been successfully processed.`);
    } catch (err) {
      setError("An error occurred while processing the card.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className={`cattle_card ${
        selectedCardId === cattle.id ? "selected" : ""
      }`}
    >
      <input type="checkbox" onClick={() => handleCardClick(cattle.id)} />
      <img src={cattleimage} alt={cattle.name} className="cattle_image" />
      <div className="cattle_info">
        <div className="cattle_id1">Code: {cattle.id}</div>
        <div className="cattle_gender">{cattle.gender}</div>
        <div className="breeding1">Breed: {cattle.breed}</div>
        <div className="aging1">Age: {cattle.age}</div>
        <div className="pricing1">
          <b>৳ {cattle.price}</b>
        </div>
      </div>
    </div>
  );
};

export default Cattle_Card;
