
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import EventIndexContainer from "./events/event_index_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import EventFormContainer from "./event_form/event_form_container";
const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
              <h1>Insombryte</h1>
            </Link>
         <GreetingContainer />
            
         {/* <EventFormContainer /> */}
        </header>
        <Link to="/events/new" className="event-form-link">New Event</Link>
        {/* <div>
            <button>
            <Route exact path="/" component={EventFormContainer} />
            </button>
        </div> */}
 
    <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute path="/events/new" component={EventFormContainer} />
        <Route exact path="/" component={EventIndexContainer} />
    </Switch>
    </div>
)

export default App