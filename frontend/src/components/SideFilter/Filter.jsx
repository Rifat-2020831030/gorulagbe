import "./Filter.css";
import Input from "./Input";

const Filter = ({ setSection,setCategory, category}) => {


  return (
    <div className="category-wrapper">
      <p>Filter</p> 
      {/* <button onClick={handleFilter}>Filter</button> */}
      <div className="category-container">
        {/* stock */}
      <div className="category-item">
          <p>Stock</p>
          <Input setCategory={setCategory} setSection={setSection} label={"Available"} field={"status"} value={"1"}/>
          <Input setCategory={setCategory} setSection={setSection} label={"Stock-out"} field={"status"} value={"0"}/>
        </div>
        {/* category section */}
        <div className="category-item">
          <p>Type</p>
          <Input setCategory={setCategory} setSection={setSection} label={"Cow"} field={"category"} value={"cow"}/>
          <Input setCategory={setCategory} setSection={setSection} label={"Goat"} field={"category"} value={"goat"}/>
          <Input setCategory={setCategory} setSection={setSection} label={"Camel"} field={"category"} value={"camel"}/>
          <Input setCategory={setCategory} setSection={setSection} label={"Others"} field={"category"} value={"others"}/>
        </div>
        {/* breed section */}
        <div className="category-item">
          <p>Breed</p>
          <Input setCategory={setCategory} setSection={setSection} label={"Shahiwal"} field={"breed"} value={"holstein"}/>
          <Input setCategory={setCategory} setSection={setSection} label={"Deshi"} field={"breed"} value={"deshi"}/>
          <Input setCategory={setCategory} setSection={setSection} label={"Jersey"} field={"breed"} value={"jersey"}/>
        </div>
        <div className="category-item">
          <p>Color</p>
          <Input setCategory={setCategory} setSection={setSection} label={"Black"} field={"color"} value={"black"}/>
          <Input setCategory={setCategory} setSection={setSection} label={"Red"} field={"color"} value={"red"}/>
          <Input setCategory={setCategory} setSection={setSection} label={"White"} field={"color"} value={"white"}/>
        </div>
        <div className="category-item">
          <p>Food</p>
          <Input setCategory={setCategory} setSection={setSection} label={"Grass"} field={"food"} value={"grass"}/>
          <Input setCategory={setCategory} setSection={setSection} label={"Hay"} field={"food"} value={"hay"}/>
          <Input setCategory={setCategory} setSection={setSection} label={"Grain"} field={"food"} value={"grain"}/>
          <Input setCategory={setCategory} setSection={setSection} label={"Mixed Food"} field={"food"} value={"mixed feed"}/>
        </div>
        <div className="category-item">
          <p>gender</p>
          <Input setCategory={setCategory} setSection={setSection} label={"Male"} field={"gender"} value={"male"}/>
          <Input setCategory={setCategory} setSection={setSection} label={"Female"} field={"gender"} value={"female"}/>
        </div>
      </div>
    </div>
  );
};

export default Filter;
