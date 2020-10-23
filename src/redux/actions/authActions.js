import axios from 'axios';
import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, USER_LOADED, USER_LOADING} from "../constants";
import {UserService as userService} from "./UserService";

export const login = (user) => async (dispatch) => {

    dispatch({ type: USER_LOADING});
    localStorage.setItem("username", user.username);
    axios({
        method: 'POST',
        url: "http://localhost:8080/login",
        data: {
            username: user.username,
            password: user.password,
        },
    })
        .then((response) =>{
            dispatch({ type: USER_LOADED});
            localStorage.setItem("token", response.data.token);
            console.log(localStorage.getItem("token"), "authActions login success");
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    token: response.data.token,
                    isAuthenticated: true,
                    isLoading: false,
                    user: user,
                },
            });
        })
        .catch((err) =>{
            console.log(err);
            dispatch({
                type: LOGIN_FAIL,
            });
        });
};

export const logout = () => (dispatch) => {
    userService.logout();
    return {
        type: LOGOUT_SUCCESS,
    };
};