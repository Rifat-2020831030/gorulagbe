import { useState, useEffect } from "react";
import "./Filter.css";
import axios from "axios";

const initialCategoryState = {
  breed: [],
  color: [],
  food: [],
  gender: [],
};

const Filter = ({ cattleData, setCattleData, setSearchMsg }) => {

  const [category, setCategory] = useState(initialCategoryState);

  const handleCheckboxChange = (event, field, value) => {
    const isChecked = event.target.checked;

    setCategory((prevCategory) => {
      const updatedField = isChecked
        ? [...prevCategory[field], value]
        : prevCategory[field].filter((item) => item !== value);

      return {
        ...prevCategory,
        [field]: updatedField,
      };
    });

    console.log(category);
  };

  function fetchData () {
    const fetchFunction = async () => {
      const response = await axios.post("http://localhost:3000/search/cattle", category);
      console.log(response);
      const status = response.data.status;
      if(status === '1') {
        const filteredData = response.data.data;
        setSearchMsg('Search Result');
        setCattleData(filteredData);
        console.log('cattledata : ', cattleData)
      }else {
        setSearchMsg('No products found');
        setCattleData([]);
      }
    }
    fetchFunction();
  }

  return (
    <div className="category-wrapper">
      <p>Filter</p> 
      <button onClick={fetchData}>Filter</button>
      <div className="category-container">
        <div className="category-item">
          <p>Breed</p>
          <div className="item-wrapper">
            <input
              type="checkbox"
              onChange={(event) =>
                handleCheckboxChange(event, "breed", "Holstein")
              }
            />
            <label>Holstein</label>
          </div>
          <div className="item-wrapper">
            <input
              type="checkbox"
              onChange={(event) =>
                handleCheckboxChange(event, "breed", "Angus")
              }
            />
            <label>Angus</label>
          </div>
          <div className="item-wrapper">
            <input
              type="checkbox"
              onChange={(event) =>
                handleCheckboxChange(event, "breed", "Jersey")
              }
            />
            <label>Jersey</label>
          </div>
        </div>
        <div className="category-item">
          <p>Color</p>
          <div className="item-wrapper">
            <input
              type="checkbox"
              onChange={(event) =>
                handleCheckboxChange(event, "color", "black")
              }
            />
            <label>Black</label>
          </div>
          <div className="item-wrapper">
            <input
              type="checkbox"
              onChange={(event) => handleCheckboxChange(event, "color", "red")}
            />
            <label>Red</label>
          </div>
        </div>
        <div className="category-item">
          <p>Food</p>
          <div className="item-wrapper">
            <input
              type="checkbox"
              onChange={(event) => handleCheckboxChange(event, "food", "Grass")}
            />
            <label>Grass</label>
          </div>
          <div className="item-wrapper">
            <input
              type="checkbox"
              onChange={(event) => handleCheckboxChange(event, "food", "Hay")}
            />
            <label>Hay</label>
          </div>
          <div className="item-wrapper">
            <input
              type="checkbox"
              onChange={(event) => handleCheckboxChange(event, "food", "Grain")}
            />
            <label>Grain</label>
          </div>
          <div className="item-wrapper">
            <input
              type="checkbox"
              onChange={(event) =>
                handleCheckboxChange(event, "food", "Mixed Feed")
              }
            />
            <label>Mixed Feed</label>
          </div>
        </div>
        <div className="category-item">
          <p>gender</p>
          <div className="item-wrapper">
            <input
              type="checkbox"
              onChange={(event) =>
                handleCheckboxChange(event, "gender", "Male")
              }
            />
            <label>Male</label>
          </div>
          <div className="item-wrapper">
            <input
              type="checkbox"
              onChange={(event) =>
                handleCheckboxChange(event, "gender", "Female")
              }
            />
            <label>Female</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
