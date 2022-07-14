import React from "react";
import EventIndexItem from "./event_index_item";



class EventIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchEvents();
    }

    render(){
        return(
            <div>
                <h1>Events</h1>
                {this.props.events.map(event => (
                    <EventIndexItem event={event} key={event.id}/>
                ))}
            </div>
        )
    }
}



export default EventIndex; 