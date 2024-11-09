import axios from "axios";
import React from "react";

import AuctionCard from "../AuctionCard/AuctionCard";
import "./CustomerAuction.css";
export const auctioninfo = [
  {
    auction_id: 13434,
    auction_name: "The COWS",
    quantity: 4,
    edate: "10-09-2024",
    status: false,
  },
  {
    auction_id: 23466,
    auction_name: "Bakarah",
    quantity: 6,
    edate: "11-07-2024",
    status: true,
  },
  {
    auction_id: 352436,
    auction_name: "TCM Agro",
    quantity: 7,
    edate: "15-09-2024",
    status: true,
  },
];
const CustomerAuction = () => {
  return (
    <div className="Customer">
      <h1>Auctions</h1>
      <div className="thefull">
        <div className="sidebar">
          <div className="sidebar-item">Your Profile</div>
          <div className="sidebar-item">Store</div>
          <div className="sidebar-item">Settings</div>
          <div className="sidebar-item">Notifications</div>
          <div className="sidebar-item">Subscriptions</div>
        </div>
        {/* <div className="vl1"></div> */}
        <div className="Auctions">
          {auctioninfo.map((auction, index) => (
            <AuctionCard key={auction.auction_id} auction={auction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerAuction;
