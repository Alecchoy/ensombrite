// import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, REMOVE_SESSION_ERRORS } from "../actions/session_actions";

import { RECEIVE_EVENT_ERRORS, REMOVE_EVENT_ERRORS } from "../actions/event_actions";



const eventErrorsReducer = ( state = [], action) => {
    Object.freeze(state);


    switch( action.type ){
        case RECEIVE_EVENT_ERRORS:
            return action.errors;
        case REMOVE_EVENT_ERRORS:
            return [];
        default:
            return state;
    }
}
export default eventErrorsReducer;