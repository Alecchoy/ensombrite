import React from "react";
import { Link, withRouter } from "react-router-dom";

class UserCreatedEventIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

 

    handleDelete(){
        this.props.deleteEvent(this.props.event.id)
    }



    render(){
        const { event } = this.props;
        return(
            
            <div className="user-event-index-item">
            
                    <div className="user-event-date">
                        {new Date(event.start_date).toDateString().split(" ")[1]}
                        { new Date(event.start_date).toDateString().split(" ")[2]}
                
                    </div>
                    <div className="user-event-pic">
                    <img src={this.props.event.photo} alt="background-pic" />
                    </div>
                    <div className="user-event-info">
                        <div className="user-event-info-time">
                            <span>{event.title}</span>
                            <span>{ new Date(this.props.event.start_date).toDateString()},&nbsp;{this.props.event.start_time.slice(11,16)}</span>
                        </div>
                    </div>
               
            
                <div className="user-event-index-item-edits">
                    <Link to={`/events/${event.id}/edit`}><i class="fa-solid fa-pen-clip" id="edit-bootoon"></i></Link>
                    <button onClick={this.handleDelete}><i class="fa-solid fa-trash-can" id="delete-bootoon"></i></button>

                </div>
            </div>

        )
    }
}

export default UserCreatedEventIndexItem;