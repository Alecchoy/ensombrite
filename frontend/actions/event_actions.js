import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_EVENT = 'REMOVE_EVENT';


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

export const removeEvent = (eventId) => ({
    type: REMOVE_EVENT,
    eventId
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

export const updateEvent = event => dispatch => {
    EventAPIUtil.updateEvent(event).then(event => 
        (dispatch(receiveEvent(event))))
}

export const deleteEvent = (eventId) => dispatch => {
    EventAPIUtil.deleteEvent(eventId).then(() => dispatch(removeEvent(eventId)))
}

export const fetchCreatedEvents = userId => dispatch => {
    EventAPIUtil.fetchCreatedEvents(userId).then(events => { dispatch(receiveEvents(events))
    })
}