export const createRegistration = eventId => (
    $.ajax({
        method: 'POST',
        url: `/api/events/${eventId}/registrations`,
        eventId
    })
)

export const fetchRegistrations = userId => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/registrations`
    })
}

export const deleteRegistration = (registrationId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/registrations/${registrationId}`,
        registrationId
    })
}
