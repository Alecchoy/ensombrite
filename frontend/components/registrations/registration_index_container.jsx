import RegistrationIndex from "./registration_index";
import { fetchRegistrations, deleteRegistration } from "../../actions/registration_actions";
import { connect } from "react-redux";



const mSTP = ({ session, entities: { users, registrations } }) => {
    return {
        userId: session.id,
        registrations: Object.values(registrations)
    }
};


const mDTP = (dispatch, ownProps) => {
    return {
        deleteRegistration: (registrationId) => dispatch(deleteRegistration(registrationId)),
        fetchRegistrations: (userId) => dispatch(fetchRegistrations(userId))
        
    }

}

export default connect(mSTP, mDTP)(RegistrationIndex)

