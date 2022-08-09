import { fetchEvent } from "../../actions/event_actions";
import { connect } from "react-redux";
import EditEventForm from "./event_edit_form";

const mSTP = (state, {errors}) => {
    console.log('oatmeal', state)
    return {
        currentUserId: state.session.id,
        currentEventId: state.entities.events.id
        
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        fetchEvent: () => dispatch(fetchEvent(ownProps.match.params.eventId)),
        // updateEvent: (event) => dispatch(updateEvent(event))
    }
}

export default connect(mSTP,mDTP)(EditEventForm)