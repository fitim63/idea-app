import axios from "axios";
import {
  CATEGORY_SELECTED_FILE,
  UPLOAD_CATEGORY_PENDING,
  UPLOAD_CATEGORY_SUCCESS,
  UPLOAD_CATEGORY_ERROR,
  SHOW_ADD_CATEGORY_MODAL,
  UPLOAD_CATEGORY_NAME
} from "../../constants";
import store from "../../store";

export function uploadCategoryAction() {
  return dispatch => {
    dispatch(uploadCategoryDataPending());
    let formData = new FormData();
    formData.append("file", store.getState().uploadCategory.selectedFile);
    formData.append("name", store.getState().uploadCategory.categoryName);
    axios({
      method: "POST",
      url: "http://localhost:8080/upload",
      data: formData
    })
      .then(response => {

      })
      .catch(error => dispatch(uplodCategoryFailure(error)));
  };
}

export const uploadCategoryDataPending = () => ({
  type: UPLOAD_CATEGORY_PENDING
});

export const uploadCategoryImageSuccess = products => ({
  type: UPLOAD_CATEGORY_SUCCESS,
  payload: {
    products: products ? products : store.getState().products.productItems
  }
});

export const uplodCategoryFailure = error => ({
  type: UPLOAD_CATEGORY_ERROR,
  payload: { error }
});

export function categoryNameAction(name) {
  return {
    type: UPLOAD_CATEGORY_NAME,
    payload: name
  };
}



export function showAddCategoryModal(visible) {
  return {
    type: SHOW_ADD_CATEGORY_MODAL,
    payload: visible
  };
}
