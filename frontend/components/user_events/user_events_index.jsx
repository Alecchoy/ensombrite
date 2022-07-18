import React from "react";
import UserCreatedEventIndexItem from "./user_events_index_item";
import {Link, withRouter} from 'react-router-dom';


class UserCreatedEventIndex extends React.Component{
    componentDidMount(){
        this.props.fetchCreatedEvents(this.props.currentUser.id)
    }

    

    render(){
        const { events, fetchEvent, currentUser } = this.props;

        const displayedEvents = events.length > 0 ? (
            <div className="displayed-events">

            <ul>
                {events.map((event, idx) => (
                

                        <UserCreatedEventIndexItem
                            event={event}
                            key={idx}
                            fetchEvent={fetchEvent}
                            currentUser={currentUser}
                        />
                    
                ))}

            </ul>
            </div>
        ) : (
            <p>Nothing here yet</p>
        )

        return (
            <div>
                <h1>Events Created</h1>
                <section className="user-events-index-image">
                    <img src="" alt="" />
                </section>
                {displayedEvents}
            </div>
        )
    }
}

export default UserCreatedEventIndex;