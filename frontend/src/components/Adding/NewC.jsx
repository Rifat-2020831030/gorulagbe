import React from "react";
import Button from "../Button/Confirm"
const NewC = () => {
    
    return(
        <div className="page">
        <h1>Add new Cattle</h1>
        <div className="full">
            <div className="left">
                <div className="thumbnail">
                        <h3>Thumbnail</h3>
                        <div className="photo">+Add Photos</div>
                        <p>Set the cattle thumbnail image.Only *.png,*jpg,*jpeg are accepted</p>
                </div>
                <div className="discount">
                    <h4>Discount</h4>
                    <hr />
                    <div className="dis">Fixed Price</div>
                    <div className="dis">7.5% off on Cellfin Payment</div>
                    <div className="dis">9.5% off on membership on GoruLagbe</div>
                </div>
            </div>
            <div className="right">
                <h3>Specification</h3>
                <hr />
                <form action="" id="form" >
                    <label htmlFor="category">Category: </label>
                    <select name="" id="category">
                        <option value="">Cow</option>
                        <option value="">Buffalo</option>
                        <option value="">Goat</option>
                        <option value="">Camel</option>
                        <option value="">Sheep</option>
                    </select>
                    <label htmlFor="age">Age: </label>
                    <input type="text" id="age" placeholder="Enter age" />
                    <label htmlFor="breed">Breed: </label>
                    <input type="text" id="breed" placeholder="Enter breed" />
                    <label htmlFor="weight">Live Weight(approx:)</label>
                    <input type="text" id="weight" placeholder="Weight(kg)"/>
                    <label htmlFor="gender">Gender: </label>
                    <input type="text" id="gender" placeholder="Enter gender" />
                    <label htmlFor="colour">Colour: </label>
                    <input type="text" id="colour" placeholder="Enter Colour" />
                    <label htmlFor="height">Height: </label>
                    <input type="text" id="height" placeholder="Height(cm)" />
                    <label htmlFor="management">Height: </label>
                    <input type="text" id="management" placeholder="Management" />
                    <label htmlFor="vaccination">Vaccination: </label>
                    <select name="vac" id="vaccination"><option value="yes">Yes</option><option value="no">No</option></select>
                    <label htmlFor="price"><h5>Asking Price</h5></label><br />
                    <input type="text" id="price" placeholder="Enter Cattle Price" />
                </form>
            </div>
        </div>
        <a href="">Cancel</a>
        <button onClick="">Confirm</button>
        </div>
    )
}

export default NewC;