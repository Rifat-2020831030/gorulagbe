import React,{useState} from "react";
import "./AuctionCard.css";

const AuctionCard = ({auction}) => {
    return(
        <div className="CARD" onClick="">
            <h4>Auction ID: {auction.auction_id}</h4><br />
            <span className="auc_name"><b>Name:</b> {auction.auction_name}</span>
            <span className="timer"><b>Time:</b> <span className="timer00">00:00:00</span></span>
            <span className = {auction.status ? "Ongoing":"Ended"}>{auction.status ? "Ongoing":"Ended"}</span><br /><br />
            <div className="NOC">Number of Cows: <span className="quantity">{auction.quantity}</span></div><div className="ED">Ending Date: {auction.edate}</div>
            
        </div>
    )
}
export default AuctionCard;