
const initialCategoryState = {
  status: [],
  type: [],
  breed: [],
  color: [],
  food: [],
  gender: [],
};

const Input = ({setSection, setCategory, label, field, value}) => {
    const handleCheckboxChange = (event, field, value) => {     
        const isChecked = event.target.checked;
        setSection('filter');
        setCategory((prevCategory) => {
          const updatedField = isChecked
            ? [...prevCategory[field], value]
            : prevCategory[field].filter((item) => item !== value);
    
          return {
            ...prevCategory,
            [field]: updatedField,
          };
        });
        // handleFilter();
        // console.log(category);
    };

      return (
        <div className="item-wrapper">
            <input
              type="checkbox"
              onChange={(event) =>
                handleCheckboxChange(event, field, value)
              }
            />
            <label>{label}</label>
          </div>
      );
}

export default Input;