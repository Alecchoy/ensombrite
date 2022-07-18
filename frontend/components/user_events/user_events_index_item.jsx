import React from "react";
import { Link, withRouter } from "react-router-dom";

class UserCreatedEventIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchEvent();
    }

    handleDelete(){
        this.props.deleteEvent()
        // .then(() => (this.props.history.push('/')))
        this.props.history.push(`/`)
    }



    render(){
        const { event } = this.props;
        return(
            <div className="user-event-index-item">
                <div className="user-event-index-item-description">
                    <span>{event.title}</span>
               
                    <span>{event.start_date}</span>
                  
                    <span>{event.start_time}</span>
              
                </div>
                <div className="user-event-index-item-edits">
                    <Link to={`/events/${event.id}/edit`}><h1>Edit</h1></Link>
                    <button onClick={() => this.handleDelete()}>DELETE</button>

                </div>
            </div>

        )
    }
}

export default UserCreatedEventIndexItem;