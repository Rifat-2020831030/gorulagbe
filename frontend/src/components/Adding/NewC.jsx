import React, { useState } from "react";
import ImageUploader from "./AddPhotos";
import "./NewC.css";

const NewC = () => {
  const [formData, setFormData] = useState({
    image: null,
    category: "",
    age: "",
    breed: "",
    gender: "",
    weight: "",
    colour: "",
    height: "",
    teeth: "",
    vaccination: "",
    price: "",
  });

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle image upload
  const handleImageUpload = (imageData) => {
    setFormData((prevData) => ({
      ...prevData,
      image: imageData,
    }));
  };

  // Handle form submission
  const newCattle = (e) => {
    e.preventDefault(); // Prevent page reload on submit

    // Prepare the data to be sent to the API
    const cattleData = {
      ...formData,
    };

    console.log(cattleData);

    // Call the API (Make sure the API URL is correct)
    fetch("http://localhost:3000/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cattleData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from API:", data);
        // Handle response data (e.g., show success message or redirect)
      })
      .catch((error) => {
        console.error("Error while adding cattle:", error);
      });
  };

  return (
    <div className="page">
      <h1>Add new Cattle</h1>
      <div className="full">
        <div className="left">
          <div className="thumbnail">
            <h3>Thumbnail</h3>
            <ImageUploader handleImage={handleImageUpload} />
            <p>
              Set the cattle thumbnail image. Only *.png, *.jpg, *.jpeg are
              accepted
            </p>
          </div>
          <div className="discount">
            <h4>Discount</h4>
            <hr />
            <div className="des">
              <span className="dis" tabIndex="1">
                Fixed Price
              </span>
              <span className="dis" tabIndex="2">
                7.5% off on Cellfin Payment
              </span>
              <span className="dis" tabIndex="3">
                9.5% off on membership on GoruLagbe
              </span>
            </div>
          </div>
        </div>
        <div className="right">
          <h2>Specification</h2>
          <hr />
          <form action="" id="form">
            <label htmlFor="category" className="category">
              Category:{" "}
            </label>
            <select
              id="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="">Cow</option>
              <option value="buffalo">Buffalo</option>
              <option value="goat">Goat</option>
              <option value="camel">Camel</option>
              <option value="sheep">Sheep</option>
            </select>
            <br />
            <label htmlFor="age" className="a">
              Age:{" "}
            </label>
            <input
              type="text"
              id="age"
              placeholder="Enter Age"
              value={formData.age}
              onChange={handleInputChange}
            />
            <label htmlFor="breed" className="a">
              Breed:{" "}
            </label>
            <input
              type="text"
              id="breed"
              placeholder="Enter Breed"
              value={formData.breed}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="gender" className="a">
              Gender:{" "}
            </label>
            <input
              type="text"
              id="gender"
              placeholder="Enter Gender"
              value={formData.gender}
              onChange={handleInputChange}
            />
            <label htmlFor="weight" className="a">
              Live Weight(approx:):
            </label>
            <input
              type="text"
              id="weight"
              placeholder="Enter Weight(kg)"
              value={formData.weight}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="colour" className="a">
              Colour:{" "}
            </label>
            <input
              type="text"
              id="colour"
              placeholder="Enter Colour"
              value={formData.colour}
              onChange={handleInputChange}
            />
            <label htmlFor="height" className="a">
              Height:{" "}
            </label>
            <input
              type="text"
              id="height"
              placeholder="Enter Height(cm)"
              value={formData.height}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="teeth" className="a">
              No. of Teeth:{" "}
            </label>
            <input
              type="text"
              id="teeth"
              placeholder="Number of Teeth"
              value={formData.teeth}
              onChange={handleInputChange}
            />
            <label htmlFor="vaccination" className="a">
              Vaccination:{" "}
            </label>
            <select
              id="vaccination"
              value={formData.vaccination}
              onChange={handleInputChange}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <br />
            <label htmlFor="price" className="a">
              <h4>Asking Price:</h4>
            </label>
            <input
              type="text"
              id="price"
              placeholder="Enter Cattle Price"
              value={formData.price}
              onChange={handleInputChange}
            />
            <br />
            <div className="btn">
              <a href="" className="cancel">
                Cancel
              </a>
              <input
                type="submit"
                value="Confirm"
                className="confirm"
                onClick={newCattle}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewC;
