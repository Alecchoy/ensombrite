# ensombrite

<img src="https://github.com/Alecchoy/ensombrite/blob/main/app/assets/images/ensom1.gif"/>

Ensombrite is a full-stack clone of Evenbrite with styling similar to Insomniac. Similar to its duplicate, it allows users to create, manage, events, register, and like events.

## Technologies

Backend:
- Ruby on Rails
- PostgreSQL
- jQuery

FrontEnd:
- React.js
- Redux.js
- CSS/SASS
- HTML

Image Hosting: Active Storage and AWS S3

## Features

### User authentificiation
- Visitors are allowed to sign up as a new user or login as a demo user
- Certain features such as creating, editing, liking, or registering for an event can only be accessed when logged in.
- If there are login errors, it will show and will not persist.
### Full CRUD functionality for events
- Users can create a new event and edit and delete an event that they have created.
- A separate index shows which events you have created and there you can manage everything that you have created.
- Each event will have a created showpage that you can access through multiple pages in the project.
<img src="https://github.com/Alecchoy/ensombrite/blob/main/app/assets/images/createevent.gif"/>

### Create and Delete event registrations
- Users can register for events that they would like to attend.
- Registered events will have a separate index where you can manage the events you are planning to attend.
- Users can create a registration through one of the event show pages.
### Create and delete event likes
- Users can "thumbs-up" or like any event.
- The "thumbs-up" will persist if a user has liked that event.
- Liked events will have a separate index where you can manage the events you have saved.
### Filter by Category
- Users can sort through the index of events by category using the categories tab.
<img src="https://github.com/Alecchoy/ensombrite/blob/main/app/assets/images/category.gif" />


## Example Code

## Creating likes on the index page 

One of the more technical challenges that I came across was to persist the like button to stay on if the user has liked the event before. I was having trouble connecting a like to each event index item. I solved it by making sure my that each individual event card had its own function to handle likes and tell whether it has been liked before or not.

```jsx
//frontend/components/event/event_index_item.jsx
    handleLike(){
        const currentLike = this.props.event.likes.find(({user_id}) => user_id === this.props.currentUserId)
        if(!currentLike){
            this.props.createLike(this.props.event.id).then(()=> this.props.fetchEvents()).then(()=> this.props.fetchLikes())
        
        } else {
            this.props.deleteLike(currentLike.id).then(()=> this.props.fetchEvents()).then(()=> this.props.fetchLikes())
        }
    }
```
```jsx
   <div onClick={this.handleLike}>
      <div>
          <i className={`fa-solid fa-thumbs-up addition
          ${ this.props.event.likes.find(({user_id}) => 
          user_id === this.props.currentUserId) ? "liked" : "unliked"}`} id="like-button"></i>
        <i className="fa-solid fa-circle" id="like-circle"></i>
      </div>
    </div>
```

## Future Implementations
- Confirmation Page
- Google Maps API
- Full Error Rendering


