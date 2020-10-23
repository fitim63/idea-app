import React from "react";
import "../style.css";
import AddCategory from "./AddCategory";
import Category from "./Category";

const ProductCategories = () => {
  return (
    <div className="container">
      <AddCategory />
      <Category />
    </div>
  );
};

export default ProductCategories;
