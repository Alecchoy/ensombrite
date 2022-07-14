import { fetchEvent, updateEvent } from "../../actions/event_actions";
import { connect } from "react-redux";
import EditEventForm from "./event_edit_form";

const mSTP = (state, ownProps) => {
    return {
        event: state.events[ownProps.match.params.eventId],
        formType: "Update Event"
    }
}

const mDTP = dispatch => {
    return {
        fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
        action: (event) => dispatch(updateEvent(event))
    }
}

export default connect(mSTP, mDTP)(EditEventForm)