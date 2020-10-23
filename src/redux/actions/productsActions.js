import axios from "axios";

import {
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS
} from "../constants";
import store from "../store";

export const fetchProductsDataPending = () => ({
  type: FETCH_PRODUCTS_PENDING
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: {products: products ? products : store.getState().products.productItems}
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: { error }
});

export function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductsDataPending());
    axios({
      method: "GET",
      url: "http://localhost:8080/products"
    })
      .then(response => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch(err => dispatch(fetchProductsFailure(err)));
  };
};
