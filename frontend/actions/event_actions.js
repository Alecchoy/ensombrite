import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';


export const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events 
})

export const receiveEvent = ({event}) => ({
    type: RECEIVE_EVENT,
    event
})


export const fetchEvents = filters => dispatch => (
    EventAPIUtil.fetchEvents(filters).then(events => (
        dispatch(receiveEvents(events))
    ))
    
)

export const fetchEvent = id => dispatch => (
    EventAPIUtil.fetchEvent(id).then(payload => (
        dispatch(receiveEvent(payload))
    ))
)

export const createEvent = event => dispatch => (
    EventAPIUtil.createEvent(event).then(event => (
        dispatch(receiveEvent(event))
    ))
)