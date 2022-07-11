
import React from "react";
import { Link, Route } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
              <h1>Insombryte</h1>
            </Link>
         <GreetingContainer />
        </header>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignUpFormContainer} />
    </div>
)

export default App