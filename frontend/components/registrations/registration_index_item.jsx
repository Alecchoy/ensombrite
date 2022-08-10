import React from "react";
import { withRouter } from "react-router-dom";


class RegistrationIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log('amazon', this.props.registrations)
        const registrationId = this.props.registration.id
        const eventId = this.props.registration.
        this.props.history.push(`/events/${eventId}`);
    }

    render(){
        return (
            <div>
                {registration.event_title}
                {/* { new Date(registration.start_date).toDateString()},&nbsp;{this.props.event.start_time.slice(11,16)} */}
                { new Date(registration.event_start_date).toDateString().split(" ")[1]}
                { new Date(registration.event_start_date).toDateString().split(" ")[2]}
            </div>

        )
        
    }

}

export default withRouter(RegistrationIndexItem)