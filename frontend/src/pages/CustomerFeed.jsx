import { useState } from "react";
import Feed from "../components/Feed/Feed.jsx";
import PageIndex from "../components/PageIndex/PageIndex.jsx";
import Poster from "../components/Poster/Poster.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import Filter from "../components/SideFilter/Filter.jsx";
import Footer from "../components/footer/Footer.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

function CustomerFeed() {
  const [cattleData, setCattleData] = useState([]);
  const [searchMsg, setSearchMsg] = useState("Search Result");
  const [searchTxt, setSearchTxt] = useState("init");
  const [offset, setOffset] = useState(0);

  const performeSearch = () => {
    console.log(searchTxt);
  };

  return (
    <>
      <Navbar />
      <Poster />
      <SearchBar setSearchTxt={setSearchTxt} performeSearch={performeSearch} />
      <center><h3>{searchMsg}</h3></center>
      <div className="feed-wrapper" style={{ display: "flex" }}>
        <Filter
          cattleData={cattleData}
          setCattleData={setCattleData}
          setSearchMsg={setSearchMsg}
        />
        {/* creates a horizontal line */}
        <div
          style={{ borderLeft: "1px solid lightgray", height: "100vh" }}
        ></div>
        <Feed
          cattleData={cattleData}
          setCattleData={setCattleData}
          searchMsg={searchMsg}
          offset={offset}
          setOffSet={setOffset}
        />
      </div>
      <PageIndex totalPage={10} setOffset={setOffset} offset={offset} />
      <Footer />
    </>
  );
}

export default CustomerFeed;
