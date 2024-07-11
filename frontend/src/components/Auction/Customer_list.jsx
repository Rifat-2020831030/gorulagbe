import React  from "react";
import Customer_filter from "./Customer_filter"
import Customer_card from "./customer_card";
import cow1 from "../../assets/cow1.jpg";
import cow2 from "../../assets/cow2.jpg";
import cow3 from "../../assets/cow3.jpg";
import cow4 from "../../assets/cow4.jpg";
const cattle_info =
[
    {
    id: "GLR 475",
    name: "Male - Bull",
    image: {cow1},
    price: 98000
},
{
    id: "GLR 193",
    name: "Male - Bull",
    image: {cow2},
    price: 144000
},
{
    id: "GLR 185",
    name: "Male - Bull",
    image: {cow3},
    price: 254600

},
{
    id: "GLT 483",
    name: "Female",
    image: {cow4},
    price: 198000
}
];

const Customer_list = () => {
    const cattle_image = [cow1,cow2,cow3,cow4];
    return(
        <div>
            <Customer_filter/>
            <div className="Customer_list">
            {cattle_info.map((cattle,index) => (
                <Customer_card key={cattle.id} cattle={cattle} cattle_image = {cattle_image[index]}/>
            ))}
            </div>
        </div>  
    )
}

export default Customer_list;