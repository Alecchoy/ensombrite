import React from "react";
import { Link, withRouter } from "react-router-dom";

class UserCreatedEventIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    // componentDidMount(){
    //     this.props.fetchEvent();
    // }

    handleDelete(){
        console.log('PROPS', this.props)   
        this.props.deleteEvent(this.props.event.id)
        // this.props.history.push(`/`)
        // window.location.reload();
    }



    render(){
        console.log('prkkokokops', this.props)
        const { event } = this.props;
        return(
            
            <div className="user-event-index-item">
            
                    <div className="user-event-date">
                        {/* <span>{event.start_date}</span>
                        <span>{event.start_time}</span> */}
                        <h1>hi</h1>
                    </div>
                    <div className="user-event-pic">YO
                    </div>
                    <div className="user-event-info">
                        <div className="user-event-info-time">
                            <span>{event.title}</span>
                            <span>{event.start_time}</span>
                        </div>
                    </div>
               
            
                <div className="user-event-index-item-edits">
                    <Link to={`/events/${event.id}/edit`}><h1>Edit</h1></Link>
                    <button onClick={this.handleDelete}>DELETE</button>

                </div>
            </div>

        )
    }
}

export default UserCreatedEventIndexItem;