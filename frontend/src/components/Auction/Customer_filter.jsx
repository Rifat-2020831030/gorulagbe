 import React from "react";
 import "./Customer_filter.css"

 const Customer = () => {
    return(
        <div>
            <div className="Menu">
                <span>Category</span>
                <form action="">
                    <input type="radio" id="cow"/> <label htmlFor="cow">Cow</label>
                    <input type="radio" id="buffalo"/> <label htmlFor="buffalo">Buffalo</label>
                    <input type="radio" id="goat"/> <label htmlFor="goat">Goat</label>
                    <input type="radio" id="sheep"/> <label htmlFor="sheep">Sheep</label>
                    <input type="radio" id="camel"/> <label htmlFor="camel">Camel</label>
                    <hr />
                    <h3>Filter by Spec</h3>

                    <label htmlFor="">Teeth: </label>
                <select name="teeth" id="teeth" >
                    <option value="No">No Teeth</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                </select><hr />
                    <label htmlFor="age">Age: </label>
                <select name="age" id="age" >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                </select><hr />
                    <label htmlFor="gender">Gender: </label>
                <select name="gender" id="gender" >
                    <option value="Male">Male-Steer</option>
                    <option value="male">Male-Bull</option>
                    <option value="Female">Female</option>
                </select><hr />
                    <label htmlFor="breed">Breed: </label>
                <select name="breed" id="breed" >
                    <option value="Shahiwal">Australian</option>
                    <option value="Red">Red Chittagong</option>
                    <option value="Local">Local</option>
                    <option value="Indian">Indian</option>
                    <option value="Nepali">Nepali</option>
                </select><hr />
                <input type="Submit" value="Search" /> 
                </form>
            </div>
        </div>
    )
 }

 export default Customer;