export const createLike = eventId => (
    $.ajax({
        method: 'POST',
        url: `/api/events/${eventId}/likes`,
        eventId
    })
)

export const fetchLikes = userId => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/likes`
    })
}

export const deleteLike = (likeId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/likes/${likeId}`,
        likeId
    })
}