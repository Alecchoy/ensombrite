import { fetchEvent, updateEvent } from "../../actions/event_actions";
import { connect } from "react-redux";
import EditEventForm from "./event_edit_form";

const mSTP = (state, ownProps) => {
 
    return {
        event: state.entities.events[ownProps.match.params.eventId],
        formType: "Update Event",
        currentUserId: state.session.id
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        fetchEvent: () => dispatch(fetchEvent(ownProps.match.params.eventId)),
        updateEvent: (event) => dispatch(updateEvent(event))
    }
}

export default connect(mSTP, mDTP)(EditEventForm)