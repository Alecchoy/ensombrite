import { RECEIVE_REGISTRATION, RECEIVE_REGISTRATIONS, REMOVE_REGISTRATION } from "../actions/registration_actions";

const registrationsReducer = ( state= {}, action ) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type){
        case RECEIVE_REGISTRATIONS:
            return action.registrations;
        case RECEIVE_REGISTRATION:
            nextState[action.registration.id] = action.registration
            return nextState;
        case REMOVE_REGISTRATION:
            delete nextState[action.registrationId]
            return nextState;
        default:
            return state;
    }
}

export default registrationsReducer;