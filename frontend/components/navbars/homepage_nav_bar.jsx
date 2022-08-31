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
                    <div>
                        <li><Link to="/"><div className="logo">ensombrite</div></Link></li>
                    </div>
                    <li><GreetingContainer /></li>
                </ul>
            </div>
    
        )
        
        
    }
}

export default HomePageNavBar;