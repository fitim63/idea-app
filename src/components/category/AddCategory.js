import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import AddCategoryModal from "./AddCategoryModal";
import {useDispatch, useSelector} from "react-redux";
import {
    showAddCategoryModal
} from "../../redux/actions/categoryactions/uploadCategoryAction";

const AddCategory = () => {

    const dispatch = useDispatch();
    const visible = useSelector(state => state.isModalVisible);


    return (
    <div className="row">
      <div
        className="col-md-3 h-50 product-grid align-self-center"
        onClick={() => dispatch(showAddCategoryModal(true))}
      >
        <FontAwesomeIcon
          size="5x"
          icon={faPlusSquare}
          color="grey"
          className="w-100"
        />
        Shto kategorine
      </div>
        <AddCategoryModal isModalVisible={visible.isModalVisible}/>
    </div>
  );
};
export default AddCategory;
