import axios from "axios";
import React, { useState } from "react";
import cow1 from "../../assets/cow1.jpg";
import CattleCard from "../cattle-card/CattleCard";
import "./CattleList.css";

const CattleList = ({api, showsubheading}) => {
  useState(async () => {
    const response = await axios.get(
      api
    );
    const result = response.data;
    console.log("api is called "+result);
    
    if (result.status === '1') {
      setCattleData(result.data);
      console.log(cattleData);
    } else {
      console.log(result.message);
    }
  }, []);

  const cow_images = [cow1, cow1, cow1, cow1];
  const [cattleData, setCattleData] = useState([]);

  return (
    <div className="cattle-list">
      <div className="section-heading" style={{display: showsubheading ? "flex" : "none"}}>
        <h2 className="heading">Featured Cattle</h2>
        <p className="subheading">
          Choose from our best cattle for your Qurbani
        </p>
      </div>
      <div className="cattle-cards">
        {cattleData.map((cattle, index) => (
          <CattleCard
            key={cattle.cattle_id}
            cattle={cattle}
            cow_image={cow_images[0]}
          />
        ))}
      </div>
      <button className="view-all-button" style={{display: showsubheading ? "flex" : "none"}}>VIEW ALL</button>
    </div>
  );
};

export default CattleList;
