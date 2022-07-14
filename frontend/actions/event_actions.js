import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events 
})

export const receiveEvent = ({event}) => ({
    type: RECEIVE_EVENT,
    event
})

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
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
        dispatch(receiveEvent(event)),
        err => (dispatch(receiveErrors(err.responseJSON)))
    ))
)