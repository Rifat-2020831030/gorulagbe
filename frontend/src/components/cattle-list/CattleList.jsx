import React from "react";
import CattleCard from "../cattle-card/CattleCard";
import "./CattleList.css";
import cow1 from "../../assets/cow1.jpg";

const cattleData = [
  {
    id: "BLF 4369",
    name: "Male - Bull",
    description: "High quality cow",
    image: "../../assets/cow1.jpg",
    size: "Medium",
    price: "214000.00",
    featured: true,
    available: true,
  },
  {
    id: "BLF 4221",
    name: "Male - Bull",
    description: "Healthy cow",
    image: "/path/to/image2.jpg",
    size: "Extra Large",
    price: "420000.00",
    featured: true,
    available: false,
  },
  {
    id: "BLF 4219",
    name: "Male - Bull",
    description: "Grass-fed cow",
    image: "/path/to/image3.jpg",
    size: "Large",
    price: "387000.00",
    featured: true,
    available: true,
  },
  {
    id: "BLF 4229",
    name: "Male - Bull",
    description: "Grass-fed cow",
    image: "/path/to/image3.jpg",
    size: "Large",
    price: "453000.00",
    featured: true,
    available: true,
  },
];

const CattleList = () => {
  const cow_images = [cow1, cow1, cow1, cow1]; 
  return (
    <div className="cattle-list">
      <div className="section-heading">
        <h2 className="heading">Featured Cattle</h2>
        <p className="subheading">Choose from our best cattle for your Qurbani</p>
      </div>
      <div className="cattle-cards">
        {cattleData.map((cattle,index) => (
          <CattleCard key={cattle.id} cattle={cattle} cow_image = {cow_images[index]}/>
        ))}
      </div>
      <button className="view-all-button">VIEW ALL</button>
    </div>
  );
};

export default CattleList;
