import React from "react";
import { fetchRegistrations } from "../../actions/registration_actions";
import HomePageNavBarContainer from "../navbars/homepage_nav_bar_container";


class RegistrationIndex extends React.Component {
    constructor(props){
        super(props)
        // console.log('testing',this.props.fetchRegistrations(this.props.userId));

    }

    componentDidMount(){
        // console.log('registrations', registrations)
        console.log('mounted')
       this.props.fetchRegistrations(this.props.userId)
    }

    render(){
        const { registrations } = this.props;
        console.log(registrations.length > 0, 'regi')
        let tester =  this.props.registrations.length > 0 && this.props.registrations.map((registration) => (
            <li>
                <h1>hi</h1>
                 <div className="regi-bar">
                {registration.id}
                </div> 
            </li>
        )) 
        return(
            
        <div>
            <HomePageNavBarContainer/>
            <ul>

            {tester}
            </ul>
           
        </div>

        )
        
    }
}


export default RegistrationIndex;
