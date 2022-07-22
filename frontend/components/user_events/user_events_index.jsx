import React from "react";
import UserCreatedEventIndexItem from "./user_events_index_item";
import {Link, withRouter} from 'react-router-dom';
import HomePageNavBarContainer from "../navbars/homepage_nav_bar_container";
import GreetingContainer from "../greeting/greeting_container";

class UserCreatedEventIndex extends React.Component{
    componentDidMount(){
        this.props.fetchCreatedEvents(this.props.currentUserId)
    }

    

    render(){
        const { events, fetchEvent, currentUserId, deleteEvent } = this.props;
        if(!events || !currentUserId ){
            return null

        }

        const displayedEvents = events.length > 0 ? (
            <div className="displayed-events">

            <ul>
                {events.map((event, idx) => (
                

                        <UserCreatedEventIndexItem
                            event={event}
                            key={idx}
                            currentUserId={currentUserId}
                            fetchEvent = { fetchEvent}
                            deleteEvent = { deleteEvent }
                        />
                    
                ))}

            </ul>
            </div>
        ) : (
            <p>Nothing here yet</p>
        )

        return (
            <div>
                <HomePageNavBarContainer />
                <div className="users-title">Events</div>
                <div className="title-box"><div class="event-list"></div></div>
               
                {displayedEvents}
            </div>
        )
    }
}

export default UserCreatedEventIndex;