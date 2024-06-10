import React from 'react';

import "./Category.css";


const Category = ({index, category, image}) => {
    // const images = [meat, bone, camel, mutton, sausage, steak];
    return (
        <>
            <div className="card">
                <img src={image} alt="Category" />
                <h4>{category}</h4>
            </div>
        </>
    );
}

export default Category;