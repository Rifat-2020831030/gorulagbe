import React from "react";
import "./RecipeCard.css";

const RecipeCard = ({ image, tags, headline, article }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={headline} className="recipe-image" />
      <div className="recipe-tags">
        {tags.map((tag, index) => (
          <span key={index} className="recipe-tag">{tag}</span>
        ))}
      </div>
      <h2 className="recipe-headline">{headline}</h2>
      <p className="recipe-article">{article}</p>
      <button className="recipe-details-button">
        See Details
      </button>
    </div>
  );
};

export default RecipeCard;
