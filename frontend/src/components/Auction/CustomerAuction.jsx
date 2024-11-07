import axios from "axios";
import React from "react";
// import { useNavigate } from 'react-router-dom';
import AuctionCard from "../AuctionCard/AuctionCard";
import "./CustomerAuction.css";
export const auctioninfo =
[{
    auction_id : 13434,
    auction_name: "The COWS",
    quantity : 4,
    edate: "10-09-2024",
    status: false, 
},{
    auction_id : 23466,
    auction_name: "Bakarah",
    quantity : 6,
    edate: "11-07-2024",
    status : true,
},{
    auction_id : 352436,
    auction_name: "TCM Agro",
    quantity: 7,
    edate: "15-09-2024",
    status: true,
}
]
const CustomerAuction = () =>
{   
    // const navigate = useNavigate();
    const handleAuctionClick = (auctionId) => {
        console.log(`Auction with ID ${auctionId} was clicked.`);
        // navigate(`/auction/${auctionId}`);
    };

    return(
        <div className="Customer">
        <h1>Auctions</h1>
        <div className="thefull">
        <div className="aucleft"><div>Your profile</div><div>Store</div><div>Settings</div><div>Notifications</div><div>Subscriptions</div></div>
        <div className="vl1"></div>
        <div className="Auctions">
            {auctioninfo.map((auction,index)=>(
            <AuctionCard key={auction.auction_id}  auction = {auction} onClick={()=> handleAuctionClick(auction.auction_id)}/>))}</div>
        </div>
        </div>
    )
 }
 
 export default CustomerAuction;
  