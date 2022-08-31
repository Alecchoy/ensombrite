import React from "react";
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
                        <a href="https://alecchoy.github.io/" target="_blank">Portfolio</a>
                    </div>
                    <div className="linkedin-footer ider">
                        <a href="https://www.linkedin.com/in/alec-choy-387aab13b/" target="_blank">LinkedIn</a>
                    </div>
                    <div className="github-footer ider">
                        <a href="https://github.com/Alecchoy" target="_blank">GitHub</a>
                    </div>
                    <div className="github-footer ider">
                        <a href="https://angel.co/u/alec-choy" target="_blank">AngelList</a>
                    </div>
                    <div className="github-footer ider">
                        <a href="https://meal-in.herokuapp.com/#/" target="_blank">MERN Project</a>
                    </div>
                    <div className="github-footer ider">
                        <a href="https://alecchoy.github.io/LittleFighterz/" target="_blank">Javascript Project</a>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Footer;