import React,{useState} from "react";
import "./AuctionCard.css";
import { useNavigate } from 'react-router-dom';

const AuctionCard = ({auction}) => {
    const navigate = useNavigate();

    const handleAuctionClick = (auction_id) => {
        console.log(`Auction with ID ${auction_id} was clicked.`);
        navigate(`/auction/${auction_id}`);
        // console.log("clicked")
    };

    return(
        <div className="CARD" onClick={() => {handleAuctionClick(auction.auction_id)}}>
            <div id="lefty">
                <h4>Auction ID: <b>{auction.auction_id}</b></h4><br />
                <span className="auc_name"><b>Auction Name:</b> {auction.auction_name}</span><br /><br />
                <span className="NOC">Number of Cows: <span className="quantity">{auction.quantity}</span></span>
            </div>
            <div className="righty">
                
                    <span className = {auction.status ? "Ongoing":"Ended"}>{auction.status ? "Ongoing":"Ended"}</span>
                    <div className="timer"><b>Timer:</b> <span className="timer00">00:00:00</span></div><br />
                    <div className="ED">Ending Date: <b>{auction.edate}</b></div>
                            
            </div>
        </div>
    )
}
export default AuctionCard;