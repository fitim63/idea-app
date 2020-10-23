import axios from "axios";

import store from '../../store';
import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_ERROR,
} from "../../constants";

export const fetchCategoriesDataPending = () => ({
  type: FETCH_CATEGORIES_PENDING
});

export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: {categories: categories ? categories : store.getState().categories.items}
});

export const fetchCategoriesFailure = error => ({
  type: FETCH_CATEGORIES_ERROR,
  payload: { error }
});

export function fetchCategories() {
  return (dispatch) => {
    dispatch(fetchCategoriesDataPending());
    axios({
      method: "GET",
      url: "http://localhost:8080/categories",
    })
      .then(response => {
        dispatch(fetchCategoriesSuccess(response.data));
      })
      .catch(err => dispatch(fetchCategoriesFailure(err)));
  };
}
