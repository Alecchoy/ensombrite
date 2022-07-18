import React from "react";
import GreetingContainer from "../greeting/greeting_container";
import {Link} from "react-router-dom";

class HomePageNavBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(

            <div className="index-nav-bar">
                <ul className="index-nav-bar-list">
                    <div id="nav-temp-box">
                        <li><Link to="/"><h1>ensombryte</h1></Link></li>
                    </div>
                     {/* <Link to={`/users/${this.props.entities.users.id}/events`}>User Events</Link> */}
                    {/* <li><a href="news.asp">News</a></li>
                    <li><a href="contact.asp">Contact</a></li>
                    <li><a href="about.asp">About</a></li> */}
                    <li><GreetingContainer /></li>
                </ul>
            </div>
    
        )
        
        
    }
}

export default HomePageNavBar;