import React from "react";
// import { fetchRegistrations } from "../../actions/registration_actions";
import HomePageNavBarContainer from "../navbars/homepage_nav_bar_container";
// import RegistrationIndexItem from "./registration_index_item";


class RegistrationIndex extends React.Component {
    constructor(props){
        super(props)
        // console.log('testing',this.props.fetchRegistrations(this.props.userId));
        this.handleClick = this.handleClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
        // console.log('registrations', registrations)
        console.log('mounted')
       this.props.fetchRegistrations(this.props.userId)
    }

    handleClick(registration) {
        return () => {
            console.log('amazon', this.props, 'lol')
            // const registrationId = this.props.registration.id
            const eventId = registration.event_id
            this.props.history.push(`/events/${eventId}`);

        } 
    }
    handleDelete(registration){
        console.log("AMOST DONE", this.props, 'LOOLOL', this.state)
        // console.log('reginald', registration)
        console.log("properties", this.props)
        return () => {
            this.props.deleteRegistration(registration.id)
        }
    }



    render(){
        if(!this.props.registrations){return null}
        console.log('this.proper', this.props)
        const { registrations } = this.props;
        console.log(registrations.length > 0, 'regi')


        let tester =  this.props.registrations.length > 0 && this.props.registrations.map((registration) => (
         
           <div className="regi-bar" onClick={this.handleClick(registration)} key={registration.id} >
                {/* <h1>hi</h1> */}
                 
              
               
                {/* { new Date(registration.start_date).toDateString()},&nbsp;{this.props.event.start_time.slice(11,16)} */}
                <div className="regi-photo">
                    <img src={registration.event_photo} alt="background-pic" />
                </div>
                <div className="regi-description-box">
                    <div className="attending">ATTENDING</div>
                    <div className="attending-title"> {registration.event_title}</div>
              
                       
                        <div> {new Date(registration.event_start_date).toDateString()}</div>
                        <div>{registration.event_start_time.slice(11,16)}</div>
                

                </div>
                <div className="deletion">
                <button onClick={this.handleDelete(registration)} key={registration.id}><i className="fa-solid fa-ban delete-iconss"></i></button>

                </div>
                
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
