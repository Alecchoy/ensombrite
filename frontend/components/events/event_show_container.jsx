import { connect } from "react-redux";
import { fetchEvent, deleteEvent } from "../../actions/event_actions";
import { fetchRegistrations, createRegistration } from "../../actions/registration_actions";
import EventShow from './event_show';

const mSTP = ( state, ownProps) => {
    console.log('loost', state)
    return {
        event: state.entities.events[ownProps.match.params.eventId],
        users: state.entities.users,
        userId: state.entities.users.id

        
    }
}

const mDTP = (dispatch, ownProps ) => {
    console.log('ownprops', ownProps)
    return {
        fetchRegistrations: (userId) => dispatch(fetchRegistrations(userId)),
        fetchEvent: () => dispatch(fetchEvent(ownProps.match.params.eventId)),
        fetchEvents: (events) => dispatch(fetchEvents(events)),
        deleteEvent: () => dispatch(deleteEvent(ownProps.match.params.eventId)),
        createRegistration: () => dispatch(createRegistration(ownProps.match.params.eventId))
        
    }
}

export default connect(mSTP, mDTP)(EventShow)