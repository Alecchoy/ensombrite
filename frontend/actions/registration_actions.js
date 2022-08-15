import * as RegistrationAPIUtil from "../util/registration_api_util";
// import { createRegistration } from "../util/registration_api_util";

export const RECEIVE_REGISTRATION = 'RECEIVE_REGISTRATION';
export const REMOVE_REGISTRATION = 'REMOVE_REGISTRATION';
export const RECEIVE_REGISTRATIONS = 'RECEIVE_REGISTRATIONS';

export const receiveRegistration = registration => ({
    type: RECEIVE_REGISTRATION,
    registration
})

export const receiveRegistrations = registrations => ({
    type: RECEIVE_REGISTRATIONS,
    registrations
})

export const removeRegistration = (registrationId) => ({
    type: REMOVE_REGISTRATION,
    registrationId
})


export const fetchRegistrations = userId => dispatch => {
    console.log(userId, 'lol')
    return(
        RegistrationAPIUtil.fetchRegistrations(userId).then(registrations => {
        console.log(registrations,'result')
            dispatch(receiveRegistrations(registrations))
        })
    )
    
}


export const createRegistration = eventId => dispatch => {
    return (
        RegistrationAPIUtil.createRegistration(eventId).then(registration => {
            dispatch(receiveRegistration(registration))
        })
    )
}

export const deleteRegistration = registrationId => dispatch => {
    return (
        RegistrationAPIUtil.deleteRegistration(registrationId).then((registration) => dispatch(removeRegistration(registration.id)))

    )
}