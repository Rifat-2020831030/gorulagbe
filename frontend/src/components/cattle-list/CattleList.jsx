import React from "react";
import CattleCard from "../cattle-card/CattleCard";
import "./CattleList.css";

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
  return (
    <div className="cattle-list">
      <h2>Featured Cattle</h2>
      <p>Choose from our best cattle for your Qurbani</p>
      <div className="cattle-cards">
        {cattleData.map((cattle) => (
          <CattleCard key={cattle.id} cattle={cattle} />
        ))}
      </div>
      <button className="view-all-button">VIEW ALL</button>
    </div>
  );
};

export default CattleList;
