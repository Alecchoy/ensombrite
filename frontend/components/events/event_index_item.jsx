import React from "react";
import { withRouter } from "react-router-dom";

class EventIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const eventId = this.props.event.id
        this.props.history.push(`/events/${eventId}`);
    }

    render(){
        console.log(this.props)
        const { title, description, location, start_date, end_date, start_time, end_time } = this.props.event;
        return (
            <div className="event-index-item" onClick={this.handleClick} >
                <div className="event-index-info" key={this.props.key}>
                    <span className="index-item-category">Title:</span>
                    <span className="index-item-copy">{title}</span>
                    <br />
                    <span className="index-item-category">Description:</span>
                    <span className="index-item-copy">{description}</span>
                    <br />
                    <span className="index-item-category">Location:</span>
                    <span className="index-item-copy">{location}</span>
                    <br />
                    <span className="index-item-category">Start Date:</span>
                    <span className="index-item-copy">{start_date}</span>
                    <br />
                    <span className="index-item-category">End Date:</span>
                    <span className="index-item-copy">{end_date}</span>
                    <br />
                    <span className="index-item-category">Start Time:</span>
                    <span className="index-item-copy">{start_time}</span>
                    <br />
                    <span className="index-item-category">End Time:</span>
                    <span className="index-item-copy">{end_time}</span>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}

export default withRouter(EventIndexItem)