import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Greeting from "./greeting";
import { fetchLikes } from "../../actions/like_actions";


const mapStateToProps = ({ session, entities: { users, registrations } }) => {
    return {
        currentUser: users[session.id],
        registrations: registrations[session.id]
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchLikes: likes => dispatch(fetchLikes(likes)),
    fetchRegistrations: registrations => dispatch(fetchRegistrations(registrations))
});

export default connect(mapStateToProps, mapDispatchToProps )(Greeting);