import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import eventsReducer from "./events_reducer";
import registrationsReducer from "./registration_reducer";
import likesReducer from "./like_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    events: eventsReducer,
    registrations: registrationsReducer,
    likes: likesReducer
})

export default entitiesReducer;