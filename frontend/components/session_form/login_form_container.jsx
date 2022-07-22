import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login, removeSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import LoginForm from "./login_form";

const mSTP = ({ errors}) => {
    return {
        errors: errors.sessionErrors,
        formType: 'login',
        navLink: <Link to="/signup">Sign Up</Link>
    }
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        demo: () => dispatch(login({email: "demo@user.com", password: "demouser" })),
        removeSessionErrors: () => dispatch(removeSessionErrors())
    }
}

export default connect(mSTP, mDTP)(LoginForm);