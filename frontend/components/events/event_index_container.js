import EventIndex from "./event_index";
import { fetchEvents, fetchEvent } from "../../actions/event_actions";
import { connect } from "react-redux";
import {createLike, fetchLikes, deleteLike} from "../../actions/like_actions"


const mSTP = (state, ownProps) => {
    // console.log('mSTP', state, 'aSA', ownProps)
    
    return{
        events: Object.values(state.entities.events),
        like: Object.values(state.entities.likes),
        currentUserId: state.session.id

    }
}

const mDTP = (dispatch, ownProps) => {
    return{

        fetchEvents: (events) => dispatch(fetchEvents(events)),
        createLike: (eventId) => dispatch(createLike(eventId)),
        fetchLikes: (likes) => dispatch(fetchLikes(likes)),
        fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId))
    }
    // createLike: ()
    
}

export default connect(mSTP, mDTP)(EventIndex);