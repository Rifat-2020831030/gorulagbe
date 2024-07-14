import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import cowimg from "../assets/cow1.jpg";
import CattleList from "../components/cattle-list/CattleList";
import Footer from "../components/footer/Footer";
import BlinkingBox from "../components/BlinkingBox/BlinkingBox";
import Navbar from "../components/navbar/Navbar";
import "./pages-css/Details.css";

const Details = () => {
  const location = useLocation();
  const data = location.state;

  const foods = ["grass", "grain", "vushi"];
  const [color, setColor] = useState("rgb(255, 242, 0)");
  const liveWeightColor = ["red", "white"];
  const [index, setIndex] = useState(0);

  //update view count
  useState(async () => {
    window.scrollTo(top)
    const viw = data.view_count + 1;
    console.log(data.cattle_id);
    const response = await axios.patch(
        `http://localhost:3000/update/cattle/cattle_id/${data.cattle_id}`,
        {view_count: viw}
      );
    console.log(response);
  }, []);

  useEffect(() => {
    setInterval(() => {
        setColor((color) => {
            (color)==="red"?"yellow":"red" 
        });
    }, 2000);
  },[]);

  return (
    <>
      <Navbar />
      <div className="details-wrapper">
        <img src={cowimg} alt="" className="details-image" />
        <div className="details-description">
          <p className="des-heading">
            A {data.category} from <span>{data.location}</span> is Up for sale
          </p>
          <i>Total viewed by : {data.view_count+1}</i>
          <li style={{listStyle:"none"}}>
            <span className="des-sub-heading" >Live Weight :</span>
            <BlinkingBox color={"red"} data={data.weight} unit={"kg"}/>
          </li>
          {/* called to action */}
          <div className="des-button">
            {data.status?<button>Buy Now</button>:<BlinkingBox data={"stock out"} />}
            <button>Add to Cart +</button>
          </div>
          {/* description */}
          <p className="description-p">Description</p>
          <ul className="des-ul">
            <li className="des-li">
              <span className="des-sub-heading">Breed :</span>
              {data.breed}{" "}
            </li>
            <li className="des-li">
              <span className="des-sub-heading">Price :</span>
              {data.discount ? (
                <div className="price">
                  <del>{data.price} ৳</del>
                  <b>{data.price * (100 - data.discount)} ৳</b>
                </div>
              ) : (
                <p>{data.price} ৳</p>
              )}
            </li>
            <li className="des-li">
              <span className="des-sub-heading">Color :</span>
              {data.color}
            </li>
          </ul>
          {/* food taken */}
          <p className="des-sub-heading">Feeded food :</p>
          <ul>
            {foods.forEach((food) => {
              <li>{food}</li>;
            })}
          </ul>
          {/* vaccination list */}
          <p className="des-sub-heading">Given Vaccine :</p>
          <ul></ul>
        </div>
      </div>
      <div className="featured-cattle">
        <p className="description-featured">Featured Cow</p>
        <div className="cattle-list-container">
          <CattleList
            api={"http://localhost:3000/get/featured/cattle"}
            showsubheading={false}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;

