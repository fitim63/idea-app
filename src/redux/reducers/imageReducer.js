import {
  FETCH_IMAGE_BY_ID_SUCCESS,
  FETCH_IMAGE_BY_ID_PENDING,
  FETCH_IMAGE_BY_ID_ERROR,
} from "../constants";

const initialState = {
  imageItems: {},
  loading: false,
  error: null
};

export const fetchImageByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGE_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        imageItems: action.payload.image
      };
    case FETCH_IMAGE_BY_ID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        imageItems: []
      };
    case FETCH_IMAGE_BY_ID_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };
    default:
      return state;
  }
};



