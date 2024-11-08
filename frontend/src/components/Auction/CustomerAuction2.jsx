import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { auctioninfo } from "./CustomerAuction";
import Customer_card from "./customer_card";
import "./CustomerAuction2.css";
import cow1 from "../../assets/cow1.jpg";
import cow2 from "../../assets/cow2.jpg";
import cow3 from "../../assets/cow3.jpg";

const element = 
[{
    id: 3245,
    name:"Australian",
    price: "3,40,000",
},
{
    id: 7654,
    name:"Nepalean",
    price:"2,50,000",
},
{
    id: 8963,
    name:"Kala Manik",
    price:"1,87,000",
},
{
    id: 7385,
    name:"Shahiwal",
    price:"98,000",
},
{
    id: 2639,
    name:"Deshal",
    price:"1,64,000",
},
{
    id: 1954,
    name:"Red Chittagong",
    price:"2,30,000",
}]

const CustomerAuction2 = () =>
{
    // const { auctionId } = useParams();  
    const { auction_id } = useParams();

    const auction = auctioninfo.find(a => a.auction_id === parseInt(auction_id));
    if (!auction) {
        return <p>Auction not found.</p>; 
      }
    
    const cattle_image= [cow1,cow2,cow3,cow3];
    return(
        <div className="Customer2">
            <div className="thefull">
            <div className="sidebar">
                <div className="sidebar-item">Your Profile</div>
                <div className="sidebar-item">Store</div>
                <div className="sidebar-item">Settings</div>
                <div className="sidebar-item">Notifications</div>
                <div className="sidebar-item">Subscriptions</div>
            </div>
                {/* <div className="vl1"></div> */}
                <div>
                    <div className="banner">
                        <span className="aucname">Auction Name: {auction.auction_name}</span>
                        <span className="enddate">End Date: {auction.edate}</span>  
                        <span className="timer">Time Remaining: 00:00:00</span>  
                    </div>
                    <div className="Cattles">
                        {element.map((cattle,index)=>(
                                <Customer_card key={element.id}  cattle = {cattle} cattle_image={cattle_image[0]} />))}

                    </div>
                </div>

            </div>
    </div>
    )
}
export default CustomerAuction2;