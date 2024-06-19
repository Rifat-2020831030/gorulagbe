import React from "react";


const Horizontal = ({cattle,cattle_image}) => {
    return(
        <div>
        <img src={cattle_image} alt={cattle.name} />
        <div className="box"><span className="id">{cattle.id}</span><span className="See Details">See Details</span></div>
        <div className="bid"><span>RRRRRRR</span>
        <form action=""><label htmlFor="">Minimum Bid</label><input type="text" placeholder="Enter Minimum Bid"/></form>
        </div>
        </div>
    )
}

export default Horizontal;