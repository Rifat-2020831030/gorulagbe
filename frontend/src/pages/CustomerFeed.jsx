import { useEffect, useState } from "react";
import axios from "axios";
import Feed from "../components/Feed/Feed.jsx";
import PageIndex from "../components/PageIndex/PageIndex.jsx";
import Poster from "../components/Poster/Poster.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import Filter from "../components/SideFilter/Filter.jsx";
import Footer from "../components/footer/Footer.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

const initialCategoryState = {
  status: [],
  type: [],
  breed: [],
  color: [],
  food: [],
  gender: [],
};

function CustomerFeed() {
  const [cattleData, setCattleData] = useState([]);
  const [searchMsg, setSearchMsg] = useState("Search Result");
  const [offset, setOffset] = useState(0);
  const [section, setSection] = useState("feed");
  const [category, setCategory] = useState(initialCategoryState);


  useEffect(() => {
      // check if category and initailCategoryState are equal
      if(JSON.stringify(category) === JSON.stringify(initialCategoryState)){
        console.log(true)
        setSection("feed");
      }
    fetchData();
  }, [section, category,offset]);

  const fetchData = async () => {
      console.log("section : ",section)
      let response;
      if(section === "feed") {
        response = await axios.get(
          `http://localhost:3000/get/cattle?limit=10&offset=`+offset
        )
      } 
      else if (section === "filter") {
        response = await axios.post(
          `http://localhost:3000/search/cattle?isFilter=1&limit=10&offset=`+offset,
          category
        );
      }
  
      const result = response.data;
      if (result.status === "1") {
        setSearchMsg("Search Result");
        setCattleData(result.data);
        console.log(cattleData);
      } else {
        setSearchMsg("No products found");
        setCattleData([]);
        console.log(result.message);
      }
    };

  return (
    <>
      {/* <Navbar /> */}
      <Poster />
      {/* <SearchBar setSearchTxt={setSearchTxt} performeSearch={performeSearch} /> */}
      <center><h3 className="text-6xl my-8">{searchMsg}</h3></center>
      <div className="feed-wrapper" style={{ display: "flex" }}>
        <Filter
          setSection={setSection}
          setCategory={setCategory}
          category={category}
        />
        {/* creates a horizontal line */}
        <div
          style={{ borderLeft: "1px solid lightgray"}}
        ></div>
        <Feed
          cattleData={cattleData}
        />
      </div>
      <PageIndex totalPage={10} setOffset={setOffset} offset={offset} />
      <Footer />
    </>
  );
}

export default CustomerFeed;
