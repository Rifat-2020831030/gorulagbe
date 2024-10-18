import React,{useState,useRef} from "react";
import "./Auction_cattle.css"
import Horizontal from "../Horizontal/horizontal_cattle_card";
import Cattle_Card from "./Cattle_Card";
import cow1 from "../../assets/cow1.jpg";
import cow2 from "../../assets/cow2.jpg";
import cow3 from "../../assets/cow3.jpg";

const cattle_info =
[{
    id: "GLR 475",
    gender: "Male - Bull",
    image: {cow1},
    age: "11 months",
    breed: "Shahiwal",
    price: "1,30,000",
    available: true,
},
{
    id: "GLR 3253",
    gender: "Male - Bull",
    image: {cow2},
    age: "3 years",
    price: "4,33,000",
    breed: "Nepolean",
    available: true,
},
{
    id: "GLR 193",
    gender: "Male - Bull",
    image: {cow3},
    age: "1.5 years",
    price: "2,50,300",
    breed: "Australian",
    available: true,

},
{
    id: "GLR 12193",
    gender: "Female- Cow",
    image: {cow3},
    price: "1,24,500",
    age: "2 years",
    breed: "Australian",
    available: true,

}
]


const Auction_cattle = ()=>{
    // useState(async () => {
    //     const response = await axios.get(
    //       api
    //     );
    //     const result = response.data;
    //     console.log("api is called "+result);
        
    //     if (result.status === '1') {
    //       setCattleData(result.data);
    //       console.log(cattleData);
    //     } else {
    //       console.log(result.message);
    //     }
    //   }, []);

    const formRef = useRef(null);
    const handleButtonClick = () => {
        if (formRef.current) {
          formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
        }
      };//It is for the outside confirm button
    //   const [cattleData, setCattleData] = useState([]);
    // const cattle_image = [cattle_info[0].image,cattle_info[1].image,cattle_info[2].image]
    const cattle_image= [cow1,cow2,cow3,cow3];
    
    return(
        
        
        <div className="auction_cattle">
            
                <h1 className="create">Create New Auction</h1><br />
                <div className="btns"><a href="" className="Cancel">Cancel</a>
                <button onClick={handleButtonClick} className="Confirm">Confirm</button>
                </div>
            
            <div>
                <h2>Description</h2>
                <form action="" id="form" ref={formRef} method="post">
              <div className="name"> <label htmlFor="auction_name" className="aaa">Auction name:</label>
                    <input type="text" id="auction_name" placeholder="Enter Auction Name" /></div>
                    <label htmlFor="sdate" className="aaa">Starting Date:</label>
                    <input type="date" id="sdate"/>
                    <label htmlFor="stime" className="aaa">Time: </label>
                    <input type="time" id="stime"/>
                    <label htmlFor="edate" className="aaa">Ending Date:</label>
                    <input type="date" id="edate" />
                    <label htmlFor="etime" className="aaa">Time: </label>
                    <input type="time" id="etime" />
                   
                    <h2 className="h2">ADD CATTLE</h2>
                    <div className="Add_cattle"> 
                   {cattle_info.map((cattle,index)=>(
                    <Cattle_Card key={cattle.id } cattle={cattle} cattleimage = {cattle_image[0]}/>
                   ))}</div>
                  
                </form>
            </div>
       
        </div>
       
    );
};

export default Auction_cattle;