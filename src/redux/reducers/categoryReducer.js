import {
  FETCH_CATEGORIES_ERROR,
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_SUCCESS,
  SHOW_ADD_CATEGORY_MODAL,
  CATEGORY_SELECTED_FILE,
  UPLOAD_CATEGORY_NAME
} from "../constants";


const initialFetchCategoriesState = {
  categoryItems: [],
  loading: false,
  error: null
};

export const fetchCategoriesReducer = (state = initialFetchCategoriesState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categoryItems: action.payload.categories
      };
    case FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        categoryItems: []
      };
    case FETCH_CATEGORIES_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };
    default:
      return state;
  }
};

const isVisible = false;

export const showCategoryModalReducer = (state = isVisible, action) => {
  switch (action.type) {
    case SHOW_ADD_CATEGORY_MODAL:
      return {
        ...state,
        isModalVisible: action.payload
      };
    default:
      return state;
  }
};

const initCategorySelectedFile = {
  selectedFile: {},
  categoryName: '',
  uploadData: {},
  uploadError: ''
};

export const uploadCategoryReducer = (state = initCategorySelectedFile, action) => {
  switch (action.type) {
    case CATEGORY_SELECTED_FILE:
      return {
        ...state,
        selectedFile: action.payload
      };
    case UPLOAD_CATEGORY_NAME:
      return {
        ...state,
        categoryName: action.payload
      };
    default:
      return state;
  }
};
