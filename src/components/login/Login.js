import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect, useHistory} from "react-router-dom";
import "./Login.css";
import {login} from "../../redux/actions/authActions";
import {AiOutlineUser} from "react-icons/all";
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";

const Login = (props) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const history = useHistory();
    let onSubmitClicked = false;

    const onSubmit = async (formProps) => {
        onSubmitClicked = true;
        console.log("------onsubmit executes");
        dispatch(
            await login({
                username: formProps.username,
                password: formProps.password,
            })
        );
        if (token) {
            console.log(token, "onSubmit token is true");
            history.push("/home");
        }
    };

    return (
        <div className="row d-flex border-bottom background-container">
            <div className="col-md-1 col-md-2 col-md-3 login-form fadeInDown">
                <div className="form-header">
                    <h2 className="register-text">
                        Login Form
                        <AiOutlineUser className="align-self-center mb-1 ml-1"/>
                    </h2>
                </div>
                <LoginForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

export default reduxForm({form: "login"})(Login);