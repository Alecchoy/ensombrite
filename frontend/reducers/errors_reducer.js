import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import eventErrorsReducer from "./event_errors_reducer";
const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer,
    eventErrors: eventErrorsReducer
})

export default errorsReducer


//testing 1 2 3 