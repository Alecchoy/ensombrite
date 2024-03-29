import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Greeting from "./greeting";


const mapStateToProps = ({ session, entities: { users, registrations } }) => {
    return {
        currentUser: users[session.id],
        registrations: registrations[session.id]
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),

});

export default connect(mapStateToProps, mapDispatchToProps )(Greeting);