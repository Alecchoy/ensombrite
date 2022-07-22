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
        // const { title, description, location, start_date, end_date, start_time, end_time } = this.props.event;
        return (
            <div className="event-index-item" onClick={this.handleClick} >
                <div className="index-item-image">
                    <img src={this.props.event.photo} alt="" className="index-photo"/>
                </div>
                <div className="event-index-info" key={this.props.key}>
                    {/* <span className="index-item-category">Title:</span> */}
                    <div className="event-index-title-box">
                    <span className="index-item-copy" id="index-title">{this.props.event.title}</span>
                    </div>
                    {/* <span className="index-item-category">Description:</span> */}
                    {/* <span className="index-item-copy">{description}</span> */}
                
                    {/* <span className="index-item-category">Location:</span> */}
                
                    {/* <span className="index-item-category">Start Date:</span> */}
                    <span className="index-item-copy" id="index-startdate">{ new Date(this.props.event.start_date).toDateString()},&nbsp;{this.props.event.start_time.slice(11,16)} </span>
                  
                    <br />
                    <span className="index-item-copy" id="index-location">{this.props.event.location}</span>
                    {/* <span className="index-item-category">Start Time:</span> */}
                    {/* <span className="index-item-copy" id="index-starttime">{start_time}</span> */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
                
                  <div>
                    <i className="fa-solid fa-heart" id="like-button"></i>
                    {/* <span class="material-symbols-outlined" id="like-circle">circle</span> */}
                    <i className="fa-solid fa-circle" id="like-circle"></i>

                  </div>
            </div>
        )
    }
}

export default withRouter(EventIndexItem)