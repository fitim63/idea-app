import React from "react";
import {Field, reduxForm} from "redux-form";
import CustomInput from "../utilscomponents/CustomInput";
import {useHistory} from "react-router";
import {validateLogin} from "./ValidationServices";

let LoginForm = (props) => {
    const {handleSubmit, onSubmit, submitting} = props;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Field type="text"
                   placeholder="Username"
                   name="username"
                component={CustomInput}
            />
            <Field
                type="password"
                placeholder="password"
                name="password"
                component={CustomInput}
            />
            <button
                className="btn m-1 btn-success btn-block"
                type="submit"
                disabled={submitting}
            >
                Submit
            </button>
        </form>
    );
};

export default reduxForm({form: "login", validate: validateLogin})(
    LoginForm
);