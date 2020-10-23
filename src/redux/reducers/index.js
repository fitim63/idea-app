import { combineReducers } from "redux";
import {fetchProductsReducer} from "./productReducer";
import {fetchCategoriesReducer, uploadCategoryReducer, showCategoryModalReducer} from "./categoryReducer";
import {fetchImageByIdReducer} from "../reducers/imageReducer";
import authReducer from "./authReducer";
import{ reducer as formReducer } from"redux-form";

const allReducers = combineReducers({
    form: formReducer,
    products: fetchProductsReducer,
    categories: fetchCategoriesReducer,
    image: fetchImageByIdReducer,
    uploadCategory: uploadCategoryReducer,
    isModalVisible: showCategoryModalReducer,
    auth: authReducer
});

export default allReducers;
