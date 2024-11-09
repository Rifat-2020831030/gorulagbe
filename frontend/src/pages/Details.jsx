import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import cowimg from "../assets/cow1.jpg";
import BlinkingBox from "../components/BlinkingBox/BlinkingBox";
import CattleList from "../components/cattle-list/CattleList";
import Footer from "../components/footer/Footer";
import "./pages-css/Details.css";

import { Breadcrumb, BreadcrumbItem } from "keep-react";
import { CaretRight } from "phosphor-react";

const Details = ({ setPage, setIsVisible, setCart, isVisible }) => {
  const location = useLocation();
  const data = location.state;

  const foods = ["grass", "grain", "vushi"];
  const [color, setColor] = useState("rgb(255, 242, 0)");
  const liveWeightColor = ["red", "white"];
  const [index, setIndex] = useState(0);
  let cartList = [];

  //update view count
  useState(async () => {
    window.scrollTo(top);
    const viw = data.view_count + 1;
    console.log("data object in details: ",data);
    const response = await axios.patch(
      `http://localhost:3000/update/cattle/cattle_id/${data.cattle_id}`,
      { view_count: viw }
    );
    console.log(response);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setColor((color) => {
        color === "red" ? "yellow" : "red";
      });
    }, 2000);
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }, []);

  function buyNow() {
    const token = localStorage.getItem("token");
    if (token === null) {
      alert("Please login first");
      setPage("login");
      setIsVisible(true);
      console.log("is visible: ",isVisible);
    }
    window.location.href = "/checkout";
  }

  function handleAddToCart(command) {
    const token = localStorage.getItem("token");
    if (token === null) {
      alert("Please login first");
      setPage("login");
      setIsVisible(true);
    } else if(command==="add"){
      cartList = JSON.parse(localStorage.getItem("cart")) || [];
      cartList.push(data.cattle_id);
      localStorage.setItem("cart", JSON.stringify(cartList));
      setCart(cartList);
      console.log(cartList);
    } else if(command==="remove"){
      cartList = JSON.parse(localStorage.getItem("cart")) || [];
      cartList = cartList.filter((id) => id !== data.cattle_id);
      localStorage.setItem("cart", JSON.stringify(cartList));
      setCart(cartList);
      console.log(cartList);
    }
  }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem style={{ color: "black", fontSize: "16px" }}>
          Overview
        </BreadcrumbItem>
        <BreadcrumbItem style={{ color: "black", fontSize: "16px" }}>
          <CaretRight size={18} color="#455468" />
          Home
        </BreadcrumbItem>
        <BreadcrumbItem style={{ color: "black", fontSize: "16px" }}>
          <CaretRight size={18} color="#455468" />
          Cattle-Feed
        </BreadcrumbItem>
        <BreadcrumbItem style={{ color: "black", fontSize: "16px" }}>
          <CaretRight size={18} color="#455468" />
          Cattle
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="details-wrapper">
        <img src={cowimg} alt="" className="details-image" />
        <div className="details-description">
          <p className="des-heading">
            A {data.category} from <span>{data.location}</span> is Up for sale
          </p>
          <i>Total viewed by : {data.view_count + 1}</i>
          <li style={{ listStyle: "none" }}>
            <span className="des-sub-heading">Live Weight :</span>
            <BlinkingBox color={"red"} data={data.weight} unit={"kg"} />
          </li>
          {/* called to action */}
          <div className="des-button">
            {data.status ? (
              <button onClick={buyNow}>Buy Now</button>
            ) : (
              <BlinkingBox data={"stock out"} />
            )}
            {/* show add to cart when data.status is true otherwise s=dont show it , also check the product is in the cart or not*/}
            {data.status && (
              (JSON.parse(localStorage.getItem("cart")) || []).includes(data.cattle_id) ? (
                <button onClick={() => handleAddToCart("remove")}>Remove from Cart</button>
              ) : (
                <button onClick={() => handleAddToCart("add")}>Add to Cart</button>
              )
            )}
            
            {/* {data.status && (<button onClick={() => {handleAddToCart("remove")}}>Remove from Cart</button>)} */}
            
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
