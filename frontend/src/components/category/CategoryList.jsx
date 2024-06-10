import Category from './Category';
import "./CategoryList.css";
import meat from "../../assets/category/bone-less-meat.jpg";
import bone from "../../assets/category/bone-meat.png";
import camel from "../../assets/category/camel.jpg";
import mutton from "../../assets/category/mutton.jpg";
import sausage from "../../assets/category/sausage.jpg";
import steak from "../../assets/category/steak.jpg";

const CategoryList = () => {
    const categories = ["Boneless Meat", "Bone Meat", "Camel Meat", "Mutton", "Sausage", "Steak"];
    const images = [meat, bone, camel, mutton, sausage, steak];
    return (
        <>
            <div className="category-heading">
                <p className='heading'>Category</p>
                <p className="subheading">All sorts of crafted meat</p>
            </div>
            <div className="categoryList">
                {categories.map((category, index)=>{
                    return <Category index={index} category = {category} key = {index} image = {images[index]}/>
                })}
            </div>
        </>
    );
}

export default CategoryList;