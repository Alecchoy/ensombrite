import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup, removeSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import SignupForm from "./signup_form";

const mSTP = ({ errors}) => {
    return {
        errors: errors.sessionErrors,
        formType: 'signup',
        navLink: <Link to="/login">Log in</Link>
    }
}

const mDTP = dispatch => {
    return { 
        processForm: (user) => dispatch(signup(user)),
        removeSessionErrors: () => dispatch(removeSessionErrors())
    }
}

export default connect(mSTP, mDTP)(SignupForm);