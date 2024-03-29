import React from 'react';
import { Link } from 'react-router-dom';
import HomePageNavBarContainer from "../navbars/homepage_nav_bar_container";
import GreetingContainer from "../greeting/greeting_container";
import Footer from "../footer/footer";

class EventShow extends React.Component{
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleRegistration = this.handleRegistration.bind(this)
    }
    
    componentDidMount(){
        this.props.fetchEvent()
        this.props.fetchRegistrations(this.props.userId)
    }



    handleDelete(){
        this.props.deleteEvent()
        this.props.history.push(`/`)
    }

    handleRegistration(){
        console.log("STATE", this.state)
        console.log('REGI', this.props)
        let isRegistered = this.props.event.registrations.find(({user_id}) => user_id === this.props.userId)
        if(!isRegistered){
            this.props.createRegistration().then(() => this.props.fetchEvent()).then(() => this.props.fetchRegistrations(this.props.userId))
        } else {
            this.props.deleteRegistration(isRegistered.id).then(() => this.props.fetchEvent()).then(() => this.props.fetchRegistrations(this.props.userId))
        }
    }


    

  
    render(){        
        console.log("STATE22", this.state)
        console.log('REGI22', this.props)
        if(!this.props.event){
            return null
        }
        if(!this.props.event.registrations){
            return null
        }
        return(
            <div>
                 <HomePageNavBarContainer />
                {/* <span>{this.props.event}</span> */}

                <div className="show-page">
                
                    <div className="show-page-image">
                        <img src={this.props.event.photo} alt="back-ground-pic" className="showpage-blur" />
                    </div> 
                   
                    <div className="show-page-info">
                        <div className="show-page-top">
                            <img src={this.props.event.photo} alt="" className="showpage-inner-image" />
                            <div className="showpage-top-right">
                                <div className="show-month">
                                    { new Date(this.props.event.start_date).toDateString().split(" ")[1]}
                                    <br />
                                     { new Date(this.props.event.start_date).toDateString().split(" ")[2]}
                                </div>
                                
                                <div className="show-title">
                                     {this.props.event.title}
                                     <br />
                                </div>
                                <div className="show-host"> by&nbsp;&nbsp;
                                <div className="host-name">
                                    {this.props.event.fname}&nbsp;{this.props.event.lname}
                                    </div>  
                                </div>
                                <br />
                                
                            </div> 
                        </div>
                    <div className="register-and-like">
                        <div className="show-like">
                            
                        </div>
                        <div className={`ticket-button ${(this.props.event.registrations.find(({user_id}) => user_id === this.props.userId)) ? "registered" : "unregistered"}`} onClick={this.handleRegistration}> 
                        {(!this.props.event.registrations.find(({user_id}) => user_id === this.props.userId)) ? 'Buy Ticket' : 'Registered'}

                        </div>
                    </div>
                   
                    <br />
                    <div className="show-page-bottom">
                        <div className="show-page-bottom-left">
                        <br />
                        <br />
                            <div className="show-page-descrip">
                                <div className="show-about">

                                    About this event
                                </div>
                                <br />
                                {this.props.event.description}
                            </div>
                        </div>

                        <div className="show-page-bottom-right">
                        <i className="fa-solid fa-calendar-days" id="show-date-logo"></i>
                        <div className="show-date-text">
                            Date and time 
                            <br />
                            <br />
                            <div className="date-text">
                            { new Date(this.props.event.start_date).toDateString()},&nbsp;{this.props.event.start_time.slice(11,16)} -
                        
                            <br />
                            { new Date(this.props.event.end_date).toDateString()},&nbsp;{this.props.event.end_time.slice(11,16)}

                            </div>
                        </div>
                            
                            <i className="fa-solid fa-location-dot" id="show-loc-logo"></i>
                            <div className="show-loc-text">
                                Location
                                <br />
                                <br />
                                <div className="event-text">
                                {this.props.event.location}
                                </div>

                            </div>

                            <i className="fa-solid fa-file-invoice" id="show-refund-logo"></i>
                            <div className="show-refund-policy">
                                Refund Policy 
                                <br />
                                <p className="refund-text">Refund up to 30 days before event </p>
                            </div>
    

                        </div>


                    </div>

                    </div>

                </div>
              
            </div>
        )
       
    }
}

export default EventShow;