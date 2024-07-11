import React from "react";


const Horizontal = ({cattle,cattle_image}) => {
    return(
        <div className="whole">
        <div className="with_image"><img src={cattle_image} alt={cattle.name} /></div>
        <div className="without"><div className="left"><span className="id">{cattle.id}</span><a href="" className="SeeDetails">See Details</a></div>
        <div className="right"><span>RRRRRRR</span>
        <form action=""><label htmlFor="">Minimum Bid</label><input type="text" placeholder="Enter Minimum Bid"/></form>
        </div>
        </div>
        </div>
    )
}

export default Horizontal;