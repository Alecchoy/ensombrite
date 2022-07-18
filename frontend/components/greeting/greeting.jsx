import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div className="login-signup">
             {/* <Link to={`/users/${this.props.session.id}/events`}>User Events</Link> */}
            <div className="login-signup-buttons">
                <Link to="/login">Log In</Link>
            </div>
            <div className="login-signup-buttons">
                <Link to="/signup">Sign Up</Link>
            </div>
            
        </div>
    )
    const personalGreeting = () => (

        <div className= "header-group">
            
             {/* <Link to={`/users/${this.props.session.id}/events`}>User Events</Link> */}
             <div id="nav-temp-box">
                <Link to="/events/new" className="event-form-link">New Event</Link>
             </div>
            <div  id="nav-temp-box">
                <h1>Likes</h1>
            </div>
            <div id="nav-temp-box">
                <h1>Tickets</h1>
            </div>
            <div className="dropdown">
                <div className="header-name" id="nav-temp-box">
                    <span>{currentUser.email}</span>
                </div>
               
                <div className="dropdown-content" id="nav-temp-box">
                    <Link to={`/users/${currentUser.id}/events`}><p>Manage Your Event</p></Link>
                    <p><button  className="header-button" id="nav-temp-box" onClick={logout}>Log Out</button></p>
                    <p>Yo</p>
                </div>
            </div>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting