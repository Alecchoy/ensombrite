import EventIndex from "./event_index";
import { fetchEvents } from "../../actions/event_actions";
import { connect } from "react-redux";
import {createLike, deleteLike} from "../../actions/like_actions"


const mSTP = (state, ownProps) => {
    console.log('mSTP', state, 'aSA', ownProps)
    return{
        events: Object.values(state.entities.events),
        like: Object.values(state.entities.likes)

    }
}

const mDTP = (dispatch, ownProps) => {
    return{

        fetchEvents: (events) => dispatch(fetchEvents(events)),
        createLike: (eventId) => dispatch(createLike(eventId)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId))
    }
    // createLike: ()
    
}

export default connect(mSTP, mDTP)(EventIndex)