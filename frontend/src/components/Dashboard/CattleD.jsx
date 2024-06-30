import React from "react";
import "./CattleD.css"

const CattleD = ({cattle,cattle_image}) => {
    return(
        <div className="whole1">
        <div className="image1"> <img src={cattle_image} alt="{cattle.name}" /></div>
        <div className="without_image1"><span className="span1">Code: </span><span className="id1">{cattle.id}</span><br />
        <span className="span1">Status: </span><span className="status">{cattle.status}</span><br />
        <span className="span1">Price: </span> <span className="price">{cattle.price}</span>
        <div className="buttons"><a href="" className="SeeDetails1">See Details</a><a href="" className="Boost">Boost Sell</a></div>
        </div>
        </div>
    )
}

export default CattleD;