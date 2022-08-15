import React from "react";
// import GreetingContainer from
import {Link} from "react-router-dom";


class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="footer">
                <div className="superpowers">
                    <div className="github-footer ider">
                        <a href="">Portfolio</a>
                    </div>
                    <div className="linkedin-footer ider">
                        <a href="">LinkedIn</a>
                    </div>
                    <div className="github-footer ider">
                        <a href="">GitHub</a>
                    </div>
                    <div className="github-footer ider">
                        <a href="">AngelList</a>
                    </div>
                    <div className="github-footer ider">
                        <a href="">MERN Project</a>
                    </div>
                    <div className="github-footer ider">
                        <a href="">Javascript Project</a>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Footer;