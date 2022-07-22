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
            
                <Link to="/events/new" className="event-form-link">
                    <div className="create-button">   
                            <span className="material-symbols-outlined" id="plus-sign">
                            add
                            </span>
                        <div className="create-text">Create an event</div>
                    </div>
                </Link>
        
            <div  id="favorite-box">
                <span className="material-symbols-outlined" id="like-sign">
                    favorite
                </span>
                <div className="nav-text">Likes</div>
            </div>
                <div id="tickets-box">

            <Link to={`/users/${currentUser.id}/registrations`}>
                    <span className="material-symbols-outlined" id="ticket-sign">
                        book_online
                    </span>
                    <div className="nav-text">Tickets</div>
            </Link>
                </div>


            <div className="dropdown">
                <div className="header-name" >
                    <div className="account-circle-padding">
                        <span className="material-symbols-outlined" id="account-circle">
                            account_circle
                        </span>
                    </div>
                    <div className="user-email">{currentUser.email}</div>
                    <span className="material-symbols-outlined" id="down-arrow">
                        expand_more
                    </span>
                </div>
               


                <div className="dropdown-content">
                    <Link to={`/users/${currentUser.id}/events`}><p id="dropdown-options">Manage Your Event</p></Link>
                    <p><button  className="header-button" id="dropdown-logout" onClick={logout}>Log Out</button></p>

                </div>


                
            </div>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting