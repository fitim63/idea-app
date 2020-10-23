import axios from "axios";
import {
  FETCH_IMAGE_BY_ID_SUCCESS,
  FETCH_IMAGE_BY_ID_PENDING,
  FETCH_IMAGE_BY_ID_ERROR,
} from "../constants";

export const fetchImageDataPending = () => ({
  type: FETCH_IMAGE_BY_ID_PENDING
});

export const fetchImageSuccess = image => ({
  type: FETCH_IMAGE_BY_ID_SUCCESS,
  payload: { image }
});

export const fetchImageFailure = error => ({
  type: FETCH_IMAGE_BY_ID_ERROR,
  payload: { error }
});


export function fetchImageById(id) {
  return dispatch => {
    dispatch(fetchImageDataPending());
    let image;
    axios({
      method: "GET",
      url: `http://localhost:8080/images/${id}`,
      responseType: 'blob'
    })
      .then(response => {
        image = URL.createObjectURL(response.data);
        dispatch(fetchImageSuccess(image));
      })
      .catch(err => dispatch(fetchImageFailure(err)));
  };
}
