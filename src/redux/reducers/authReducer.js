import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, USER_LOADED, USER_LOADING} from "../constants";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_FAIL:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null
            };
        case LOGOUT_SUCCESS:
        default:
            return state;
    }
}
