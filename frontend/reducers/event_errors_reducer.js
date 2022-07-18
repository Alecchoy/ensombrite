// import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, REMOVE_SESSION_ERRORS } from "../actions/session_actions";

import { RECEIVE_ERRORS } from "../actions/event_actions";

// const sessionErrorsReducer = ( state = [], action) => {
//     Object.freeze(state);


//     switch (action.type) {
//         case RECEIVE_ERRORS:
//             return action.errors;
//         case RECEIVE_CURRENT_USER:
//             return [];
//         case REMOVE_SESSION_ERRORS:
//             return [];
//         default:
//             return state;
//     }
// }

// export default sessionErrorsReducer;

const eventErrorsReducer = ( state = [], action) => {
    Object.freeze(state);


    switch( action.type ){
        case RECEIVE_ERRORS:
            return action.errors; 
        default:
            return state;
    }
}
export default eventErrorsReducer;