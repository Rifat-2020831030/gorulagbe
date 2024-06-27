import React from "react";
import "./HorizontalD.css"

const HD = ({cattle,cattle_image}) => {
    return(
        <div className="whole">
            <div className="with_image"><img src={cattle_image} alt={cattle.name} /></div>
            <div className="without">
                <div className="left"><p>Code:</p><div className="id">{cattle.id}</div><a href="" className="SeeDetails">See Details</a></div>
                <div className="right"><p>Current Bid:</p><p className="TK">Tk {cattle.price}</p></div>
                </div>
        </div>
    )

}
export default HD;