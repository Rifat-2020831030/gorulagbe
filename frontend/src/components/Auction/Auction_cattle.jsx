import React from "react";
import "./Auction_cattle.css"

const cattle_info =
[{
    id: "GLR 475",

},
{

}
]


const Auction_cattle = ({ cow , cattle_image})=>{
    const cattle_image = [cattle_info.image]
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
                    <label htmlFor="">Auction name:</label>
                    <input type="text" placeholder="Enter Auction Name" />
                    <label htmlFor="">Starting Date:</label>
                    <input type="text" placeholder="Day" className="day"/> :Day 
                    <input type="text" placeholder="Month" className="day" /> :Month
                    <input type="text" placeholder="Year" className="day"/> :Year
                    <label htmlFor="">Time: </label>
                    <input type="text" placeholder="00" /> : <input type="text" placeholder="00" />
                    <label htmlFor="">Ending Date:</label>
                    <input type="text" placeholder="Day" className="day"/> :Day 
                    <input type="text" placeholder="Month" className="day" /> :Month
                    <input type="text" placeholder="Year" className="day"/> :Year
                    <label htmlFor="">Time: </label>
                    <input type="text" placeholder="00" /> : <input type="text" placeholder="00" />


                    <div className="CattleCard">
                        <img src={cattle_image} alt={cow.name} className="cattle"/>
                        <div className="cattle-info">
                            <div className="cattle-header">
                            <span className="cattle-id">{cow.id}</span>
                            <span className="minimum_bid">Minimum Bid</span>
                            <input type="text" placeholder="Enter Minimum Bid" />
                            </div> 
                        </div>
                    </div>
                </form>
            </div>
       
        </div>
       
    );
};

export default Auction_cattle;