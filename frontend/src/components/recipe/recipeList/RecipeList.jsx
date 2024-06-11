import React from "react";
import RecipeCard from "../recipeCard/RecipeCard";
import "./RecipeList.css";
import recipe1 from "../../../assets/cury.png";
import recipe2 from "../../../assets/rejala.png";
import recipe3 from "../../../assets/mejbani.png";
import recipe4 from "../../../assets/steak.png";

const recipes = [
  {
    image: recipe4,
    tags: ["Beef", "Grill", "Spicy"],
    headline: "Spicy Grilled Beef",
    article: "A delicious and spicy grilled beef recipe perfect for summer.",
  },
  {
    image: recipe2,
    tags: ["Lamb", "Roast", "Herb"],
    headline: "Herb Roasted Lamb",
    article: "A tender and flavorful herb roasted lamb for special occasions.",
  },
  {
    image: recipe3,
    tags: ["Lamb", "Roast", "Herb"],
    headline: "Herb Roasted Lamb",
    article: "A tender and flavorful herb roasted lamb for special occasions.",
  },
  {
    image: recipe1,
    tags: ["Lamb", "Roast", "Herb"],
    headline: "Herb Roasted Lamb",
    article: "A tender and flavorful herb roasted lamb for special occasions.",
  },
  // Add more recipe objects as needed
];

const RecipeList = () => {
  return (
    <>
      <div className="section-heading">
        <p className="heading">Meat Dishes</p>
        <p className="subheading">Seleted meat dishes for you</p>
      </div>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            image={recipe.image}
            tags={recipe.tags}
            headline={recipe.headline}
            article={recipe.article}
          />
        ))}
      </div>
    </>
  );
};

export default RecipeList;
