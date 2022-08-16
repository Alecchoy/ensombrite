
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import HomePageNavBarContainer from "./navbars/homepage_nav_bar_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import EventIndexContainer from "./events/event_index_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import EventFormContainer from "./event_form/event_form_container";
import EventEditFormContainer from "./event_form/event_edit_container";
import EventShowContainer from "./events/event_show_container";
import UserCreatedEventsIndexContainer from "./user_events/user_events_index_container";
import RegistrationIndexContainer from "./registrations/registration_index_container";
import LikesIndexContainer from "./likes/likes_index_container";
// import Footer from "./footer/footer";
const App = () => (
    <div>
        <header>
            {/* <HomePageNavBarContainer /> */}
            
         {/* <EventFormContainer /> */}
        </header>
         {/* <GreetingContainer /> */}
        {/* <Link to="/events/new" className="event-form-link">New Event</Link> */}
        {/* <Link to={`/users/${this.props.user.id}/events`}>User Events</Link> */}
        {/* <div> */}
            {/* <button> */}
            {/* <Route exact path="/" component={EventFormContainer} /> */}
            {/* </button> */}
        {/* </div> */}
 
    <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute path="/events/new" component={EventFormContainer} />
        <Route exact path="/" component={EventIndexContainer} />
        <Route path="/events/:eventId/edit" component={EventEditFormContainer} />
        <ProtectedRoute path="/events/:eventId" component={EventShowContainer} />
        <ProtectedRoute path="/users/:userid/events" component={UserCreatedEventsIndexContainer} />
        <ProtectedRoute path="/users/:user_id/registrations" component={RegistrationIndexContainer} />
        <ProtectedRoute path="/users/:user_id/likes" component={LikesIndexContainer} />
    </Switch>

    </div>
)

export default App