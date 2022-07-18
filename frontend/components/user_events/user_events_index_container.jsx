import { connect } from "react-redux";
import { fetchCreatedEvents, fetchEvent, deleteEvent } from "../../actions/event_actions";
import UserCreatedEventIndex from "./user_events_index";

const mSTP = ({ entities: {events, users, }, session}) => {
    console.log('users', users, users[session.id])
    return {
        events: Object.values(events),
        currentUser: users[session.id]
    }
}

const mDTP = dispatch => {
    return {
        fetchCreatedEvents: (userId) => dispatch(fetchCreatedEvents(userId)),
        fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
        deleteEvent: (eventId) => dispatch(deleteEvent(eventId))
    }
}

export default connect(mSTP, mDTP)(UserCreatedEventIndex)