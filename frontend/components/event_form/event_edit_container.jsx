import { fetchEvent, removeEventErrors } from "../../actions/event_actions";
import { connect } from "react-redux";
import EditEventForm from "./event_edit_form";

const mSTP = (state, errors) => {
    return {
        // errors: errors.eventErrors,
        currentEventId: state.entities.events.id
        
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        fetchEvent: () => dispatch(fetchEvent(ownProps.match.params.eventId)),
        removeEventErrors: () => dispatch(removeEventErrors())
        
        // updateEvent: (event) => dispatch(updateEvent(event))
    }
}

export default connect(mSTP,mDTP)(EditEventForm)