import React,{useState} from "react";
import ImageUploader from "./AddPhotos";
import "./NewC.css"
const NewC = () => {
    const [formData, setFormData] = useState({
        image: null,
        otherField: ''
      });
      const handleImageUpload = (imageData) => {
        setFormData((prevData) => ({
          ...prevData,
          image: imageData
        }));
      };
    return(
        <div className="page">
        <h1>Add new Cattle</h1>
        <div className="full">
            <div className="left">
                <div className="thumbnail">
                        <h3>Thumbnail</h3>
                        <ImageUploader handleImage={handleImageUpload}/>
                        <p>Set the cattle thumbnail image.Only *.png,*jpg,*jpeg are accepted</p>
                </div>
                <div className="discount">
                    <h4>Discount</h4>
                    <hr />
                    <div className="des">
                    <span className="dis" tabIndex="1">Fixed Price</span>
                    <span className="dis"tabIndex="2">7.5% off on Cellfin Payment</span>
                    <span className="dis"tabIndex="3">9.5% off on membership on GoruLagbe</span>
                    </div>
                </div>
            </div>
            <div className="right">
                <h2>Specification</h2>
                <hr />
                <form action="" id="form" >
                    <label htmlFor="category" className="category">Category: </label>
                    <select name="" id="category">
                        <option value="">Cow</option>
                        <option value="">Buffalo</option>
                        <option value="">Goat</option>
                        <option value="">Camel</option>
                        <option value="">Sheep</option>
                    </select><br />
                    <label htmlFor="age" className="a">Age: </label>
                    <input type="text" id="age" placeholder="Enter Age" />
                    <label htmlFor="breed" className="a">Breed: </label>
                    <input type="text" id="breed" placeholder="Enter Breed" /><br />
                    <label htmlFor="gender" className="a">Gender: </label>
                    <input type="text" id="gender" placeholder="Enter Gender" />
                    <label htmlFor="weight" className="a" >Live Weight(approx:)</label>
                    <input type="text" id="weight" placeholder="Enter Weight(kg)"/><br />
                    <label htmlFor="colour" className="a">Colour: </label>
                    <input type="text" id="colour" placeholder="Enter Colour" />
                    <label htmlFor="height" className="a">Height: </label>
                    <input type="text" id="height" placeholder="Enter Height(cm)" /><br />
                    <label htmlFor="teeth" className="a">No. of Teeth: </label>
                    <input type="text" id="teeth" placeholder="Number of Teeth" />
                    <label htmlFor="vaccination" className="a">Vaccination: </label>
                    <select name="vac" id="vaccination"><option value="yes">Yes</option><option value="no">No</option></select><br />
                    <label htmlFor="price"className="a"><h4>Asking Price:</h4></label>
                    <input type="text" id="price" placeholder="Enter Cattle Price" /><br />
                    <div className="btn">
                        <a href="" className="cancel">Cancel</a>
                        <input type="submit" value="Confirm" className="confirm"/>
                    </div>
                </form>
            </div>
        </div>
        {/* <a href="">Cancel</a>
        <button onClick="">Confirm</button> */}
        </div>
    )
}

export default NewC;