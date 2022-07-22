export const createRegistration = eventId => (
    $.ajax({
        method: 'POST',
        url: `/api/events/${eventId}/registrations`
    })
)

export const fetchRegistrations = userId => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/registrations`
    })
}

export const deleteRegistration = (registrationId) => {
    $.ajax({
        method: 'DELETE',
        url: `/api/registrations/${registrationId}`
    })
}
