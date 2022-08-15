import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const REMOVE_EVENT_ERRORS = "REMOVE_EVENT_ERRORS"


export const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events 
})

export const receiveEvent = (event) => ({
    type: RECEIVE_EVENT,
    event
})

export const receiveEventErrors = errors => ({
    type: RECEIVE_EVENT_ERRORS,
    errors
})

export const removeEventErrors = () => ({
    type: REMOVE_EVENT_ERRORS
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
    EventAPIUtil.deleteEvent(eventId).then((event) => {console.log('event!!!', event);  dispatch(removeEvent(event.id));})
}

export const fetchCreatedEvents = userId => dispatch => {
    EventAPIUtil.fetchCreatedEvents(userId).then(events => { dispatch(receiveEvents(events))
    })
}