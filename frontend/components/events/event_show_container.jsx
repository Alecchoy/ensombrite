import { connect } from "react-redux";
import { fetchEvent } from "../../actions/event_actions";
import EventShow from './event_show';

const mSTP = (state, ownProps) => {
    console.log('state', state )
    return {
        event: state.entities.events[ownProps.match.params.eventId]
    }
}

const mDTP = (dispatch, ownProps ) => {
    return {
        fetchEvent: () => dispatch(fetchEvent(ownProps.match.params.eventId))
    }
}

export default connect(mSTP, mDTP)(EventShow)