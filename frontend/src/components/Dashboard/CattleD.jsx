import React from "react";
import "./CattleD.css"

const CattleD = ({cattle,cattle_image}) => {
    return(
        <div className="whole1">
        <div className="image1"> <img src={cattle_image} alt="{cattle.name}" /></div>
        <div className="without_image1">
        <div className="span1">Code: <span className="id1">{cattle.id}</span></div><br />
        <div className="span1">Status: <span className="status">{cattle.status}</span></div><br />
        <div className="span1">Price:  <span className="price">{cattle.price}</span></div></div>
        <div className="buttons"><a href="" className="SeeDetails1">See Details</a><a href="" className="Boost">Boost Sell</a></div>
        
        </div>
    )
}

export default CattleD;