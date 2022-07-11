export const fetchEvents = data => (
   $.ajax({
    method: 'GET',
    url: `api/events`,
    data
   })
)

export const fetchEvent = id => (
    $.ajax({
        method: 'GET',
        url: `api/events/${id}`,
        error: (err) => console.log(err)
    })
)

export const createEvent = event => {
    $.ajax({
        method: 'POST'
    
    })
}

