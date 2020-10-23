const validateLogin = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = "Username Required **";
    }
    if (!values.password) {
        errors.password = "Password Required **";
    }
    return errors;
};

export { validateLogin };
