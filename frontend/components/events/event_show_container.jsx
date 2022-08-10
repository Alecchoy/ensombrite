import { connect } from "react-redux";
import { fetchEvent, deleteEvent } from "../../actions/event_actions";
import { createRegistration } from "../../actions/registration_actions";
import EventShow from './event_show';

const mSTP = (state, ownProps) => {
   
    return {
        event: state.entities.events[ownProps.match.params.eventId],
        users: state.entities.users
        
    }
}

const mDTP = (dispatch, ownProps ) => {
    console.log('ownprops', ownProps)
    return {
        fetchEvent: () => dispatch(fetchEvent(ownProps.match.params.eventId)),
        deleteEvent: () => dispatch(deleteEvent(ownProps.match.params.eventId)),
        createRegistration: () => dispatch(createRegistration(ownProps.match.params.eventId))
        
    }
}

export default connect(mSTP, mDTP)(EventShow)