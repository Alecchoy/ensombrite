import EventIndex from "./event_index";
import { fetchEvents } from "../../actions/event_actions";
import { connect } from "react-redux";


const mSTP = state => ({
    events: Object.values(state.entities.events)
})

const mDTP = dispatch => ({
    fetchEvents: (events) => dispatch(fetchEvents(events))
})

export default connect( mSTP, mDTP)(EventIndex)