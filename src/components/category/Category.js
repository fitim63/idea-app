import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/actions/categoryactions/fetchCategoryActions";

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchCategories());
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="row">
      {categories.categoryItems.map((category, index) => (
        <div className="col-md-3 col-sm-2 h-20 product-grid">
          <img
            alt={index}
            src={`data:image/png;base64,${category.image.pic}`}
            className=" w-100"
          />
          <a href="#" className="btn buy">
            {category.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Category;




