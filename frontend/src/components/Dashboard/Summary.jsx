import React  from "react";
import "./Summary.css"
import HorizontalD from "./HorizontalD";
import CattleD from "./CattleD"
import cow1 from "../../assets/cow1.jpg";
import cow2 from "../../assets/cow2.jpg";
import cow3 from "../../assets/cow3.jpg";

const cattles =
[{
    id: "GLR_4755",
    name: "Male - Bull",
    image: {cow1},
    status: "Unsold",
    price: 80000
},
{
    id: "GLR_3253",
    name: "Male - Bull",
    status: "Sold",
    image: {cow2},
    price: 125000
},
{
    id: "GLR_1931",
    name: "Male - Bull",
    status: "Unsold",
    image: {cow3},
    price: 357300
}
]

const Summary = () => {
    const cattle_image= [cow1,cow2,cow3];
    return (
        <>
        <h1 className="Headline">Dashboard</h1>
        <div className="full">
        <div className="lefty">
        
            <a href="" className="profile">Your Profile</a>
            <a href="" className="pc">Your Posted Cattle</a>
            <a href="" className="auc">Your Auction</a>
            <a href="" className="">Statistics</a>
        </div>
        <div className="vl"></div>
        <div className="righty">
         <div className="Boxes">
            <div className="New"><a href="" className="New1">Add New Cattle</a></div>
            <div className="Statistics">
                <span className="number1">Cattle Statistics</span> <br />
                <span className="number">54</span> <br />
                <span className="number1">Cow Unsold</span>  <br />
            </div>
            <div className="auction">
                
                <span className="auc1"><h3>Auction</h3><h5>Total Auction :</h5><h4>11</h4> 
                <h5>Recent Auction: </h5><h4>5</h4> </span>
                <span className="auc2"><h5>Auction Ended:</h5> <h4>6</h4>
                <h5>Total Sales: </h5><h4>105k</h4></span>
            </div>
        </div>
        <div className="live">
            <div className="liveAuction"><span><h2>Live Auction</h2> </span><span className="Time">Time Remaining: 00:00:00</span></div>
            <div className="liveAuctionBox">
            {cattles.map((cattle,index)=>(
                    <HorizontalD key={cattle.id } cattle={cattle} cattle_image= {cattle_image[index]}/>
                   ))}
            </div>
        </div>
        <div className="cattles">
            <span><h2>Posted Cattles</h2></span>
            <div className="postedCattleBox">
                {cattles.map((cattle,index)=>(
                    <CattleD key={cattle.id} cattle={cattle} cattle_image ={cattle_image[index]} />
                ))}
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Summary;