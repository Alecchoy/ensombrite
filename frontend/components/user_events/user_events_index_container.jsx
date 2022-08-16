import { connect } from "react-redux";
import { fetchCreatedEvents, fetchEvent, deleteEvent } from "../../actions/event_actions";
import UserCreatedEventIndex from "./user_events_index";

const mSTP = ({ entities: { events, users, }, session}) => {
  
    return {
        events: Object.values(events),
        currentUserId: session.id
        
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        fetchCreatedEvents: (userId) => dispatch(fetchCreatedEvents(userId)),
        fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
        deleteEvent: (id) => dispatch(deleteEvent(id)),
    }
}

export default connect(mSTP, mDTP)(UserCreatedEventIndex)