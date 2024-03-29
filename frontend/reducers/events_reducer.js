import { RECEIVE_EVENT, RECEIVE_EVENTS, REMOVE_EVENT } from "../actions/event_actions";

const eventsReducer = ( state= {}, action ) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_EVENTS:
            return action.events;
        case RECEIVE_EVENT:
            nextState[action.event.id] = action.event
            return nextState;
        case REMOVE_EVENT:
            delete nextState[action.eventId]
            return nextState;
            
        default:
            return state;
    }
}

export default eventsReducer;