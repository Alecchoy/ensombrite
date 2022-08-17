import React from "react";
// import { fetchRegistrations } from "../../actions/registration_actions";
import HomePageNavBarContainer from "../navbars/homepage_nav_bar_container";
import Footer from "../footer/footer";
// import RegistrationIndexItem from "./registration_index_item";


class RegistrationIndex extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
       this.props.fetchRegistrations(this.props.userId)
    }

    handleClick(registration) {
        return () => {
            const eventId = registration.event_id
            this.props.history.push(`/events/${eventId}`);

        } 
    }
    handleDelete(registration){
        return () => {
            this.props.deleteRegistration(registration.id)
        }
    }



    render(){
        if(!this.props.registrations){return null}
        const { registrations } = this.props;


        let tester =  this.props.registrations.length > 0 && this.props.registrations.map((registration) => (
         
           <div className="regi-bar" onClick={this.handleClick(registration)} key={registration.id} >
                
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
            <div>
                <HomePageNavBarContainer/>
                <div className="hoverer">
                        <div className="hover-text">
                            REGISTERED EVENTS
                        </div>
                    </div>
                <div className="regi-container">
                {tester}
                </div>
                {/* <Footer /> */}
            </div>
            <footer>
                <Footer />
            </footer>

         </div>   

        )
        
    }
}


export default RegistrationIndex;
