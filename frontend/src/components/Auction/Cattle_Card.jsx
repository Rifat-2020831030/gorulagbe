import React,{useState} from "react";
import "./Cattle_Card.css"
const performDatabaseOperation = async (id) => {
    // Replace with your actual database logic
    console.log(`Performing database operation for card with id: ${id}`);
    // Simulate a delay
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };
const Cattle_Card = ({cattle,cattleimage}) =>{
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
        setError('An error occurred while processing the card.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    return (
        <div className={`cattle_card ${selectedCardId === cattle.id ? 'selected' : ''}`} onClick={() => handleCardClick(cattle.id)}>
        <img src={cattleimage} alt={cattle.name} className="cattle_image" />
        <div className="cattle_info">
            <span >Code: <span className="cattle_id">{cattle.id}</span></span>
            <h4>{cattle.gender}</h4>
            <span className="breeding">Breed : {cattle.breed}</span>
            <span className="aging">Age: {cattle.age}</span>
            <h5 className="pricing">৳ {cattle.price}</h5>
        </div>
        </div>
    )
}

export default Cattle_Card;