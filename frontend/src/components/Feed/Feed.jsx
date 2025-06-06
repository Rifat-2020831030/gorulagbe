import axios from "axios";
import { useEffect, useState } from "react";

import cow1 from "../../assets/cow1.jpg";
import CattleCard from "../cattle-card/CattleCard";
import "./Feed.css";

const Feed = ({cattleData}) => {
  const cow_images = [cow1, cow1, cow1, cow1];


  // useEffect(() => {
  //   console.log("useEffect is called for offset: ", offset);
  //   console.log(`http://localhost:3000/get/cattle?limit=10&offset=${offset}`);
  //   // console.log(cattleData);
  //   const fetchData = async () => {
      
  //   };
  //   fetchData();
  // }, [offset]);

  return (
    <div className="cattle-feed">
      {cattleData.map((cattle, index) => (
        <CattleCard
          key={cattle.cattle_id}
          cattle={cattle}
          cow_image={cow_images[0]}
          // onClick = {<Navigate to="/" />}
        />
      ))}
    </div>
  );
};

export default Feed;
