import { connect } from "react-redux";
import { createEvent} from "../../actions/event_actions";
import HomePageNavBar from "./homepage_nav_bar";


const mSTP = (state) => {
    return{
        event: ["chicken test mSTp"]
    }
}

const mDTP = (dispatch) => ({
    createEvent: event => dispatch(createEvent(event))
})

export default connect(mSTP, mDTP)(HomePageNavBar)