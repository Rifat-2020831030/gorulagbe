import React from "react";
import "./Auction_cattle.css"
import Horizontal from "../Horizontal/horizontal_cattle_card";
import cow1 from "../../assets/cow1.jpg";
import cow2 from "../../assets/cow2.jpg";
import cow3 from "../../assets/cow3.jpg";

const cattle_info =
[{
    id: "GLR 475",
    name: "Male - Bull",
    image: {cow1}
},
{
    id: "GLR 193",
    name: "Male - Bull",
    image: {cow2}
},
{
    id: "GLR 193",
    name: "Male - Bull",
    image: {cow3}
}
]


const Auction_cattle = ()=>{
    // const cattle_image = [cattle_info[0].image,cattle_info[1].image,cattle_info[2].image]
    const cattle_image= [cow1,cow2,cow3]
    return(
        
        
        <div className="auction_cattle">
            <div className="auction">
                <h1>Create New Auction</h1>
                <a href="">Cancel</a>
                <button onClick="">Confirm</button>
            </div>
            <div>
                <h2>Description</h2>
                <form action="">
                    <label htmlFor="auction_name">Auction name:</label>
                    <input type="text" id="auction_name" placeholder="Enter Auction Name" />
                    <label htmlFor="">Starting Date:</label>
                    <input type="text"  placeholder="Day"  className="day"/> :Day 
                    <input type="text"  placeholder="Month" className="day" /> :Month
                    <input type="text"  placeholder="Year" className="day"/> :Year
                    <label htmlFor="">Time: </label>
                    <input type="text" placeholder="00" /> : <input type="text" placeholder="00" />
                    <label htmlFor="">Ending Date:</label>
                    <input type="text" placeholder="Day" className="day"/> :Day 
                    <input type="text" placeholder="Month" className="day" /> :Month
                    <input type="text" placeholder="Year" className="day"/> :Year
                    <label htmlFor="">Time: </label>
                    <input type="text" placeholder="00" /> : <input type="text" placeholder="00" />
                   <div className="Add_cattle">
                    <h2>ADD CATTLE</h2>
                   {cattle_info.map((cattle,index)=>(
                    <Horizontal key={cattle.id } cattle={cattle} cattle_image= {cattle_image[index]}/>
                   ))}</div>
                </form>
            </div>
       
        </div>
       
    );
};

export default Auction_cattle;