import { connect } from "react-redux";
import { createEvent, fetchEvents} from "../../actions/event_actions";
import HomePageNavBar from "./homepage_nav_bar";


const mSTP = (state) => {
    return{
        event: ["chicken test mSTp"]
    }
}

const mDTP = (dispatch) => ({
    createEvent: event => dispatch(createEvent(event)),
    fetchEvents: events => dispatch(fetchEvents(events)),
    
})

export default connect(mSTP, mDTP)(HomePageNavBar)