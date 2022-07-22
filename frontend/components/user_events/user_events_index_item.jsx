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
                    <Link to={`/events/${event.id}/edit`}><h1>Edit</h1></Link>
                    <button onClick={this.handleDelete}>DELETE</button>

                </div>
            </div>

        )
    }
}

export default UserCreatedEventIndexItem;