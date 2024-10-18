import React from "react";
import Customer_card from "./customer_card";
import "./CustomerAuction2.css"

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

const CustomerAuction = () =>
{
    return(
        <>
        <span className="aucname">Auction Name: {auction.auction_name}</span>
        <span className="timer">Time Remaining: 00:00:00</span>
        <div className="Cattles">
            {element.map(auction,index)}
        </div>
        </>
    )
}