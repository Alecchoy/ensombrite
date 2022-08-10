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
        console.log('this.proper', this.props)
        const { registrations } = this.props;
        console.log(registrations.length > 0, 'regi')


        let tester =  this.props.registrations.length > 0 && this.props.registrations.map((registration) => (
         
           <div className="regi-bar">
                {/* <h1>hi</h1> */}
                 
              
                {registration.event_title}
                {/* { new Date(registration.start_date).toDateString()},&nbsp;{this.props.event.start_time.slice(11,16)} */}
                { new Date(registration.event_start_date).toDateString().split(" ")[1]}
                { new Date(registration.event_start_date).toDateString().split(" ")[2]}
                
            </div>
        )) 
        return(
            
        <div>
            <HomePageNavBarContainer/>
            <div className="regi-container">
                {/* <div className="custom1"></div>
                <div className="custom2"></div>
                <div className="custom3"></div>
                <div className="ticket-title">Orders</div> */}

            {tester}
            </div>
           
        </div>

        )
        
    }
}


export default RegistrationIndex;
