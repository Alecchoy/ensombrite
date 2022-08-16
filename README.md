# ensombrite

<img src="https://github.com/Alecchoy/ensombrite/blob/main/app/assets/images/ensom1.gif"/>

Ensombrite is a full-stack clone of Evenbrite. Similar to its duplicate, it allows users to create, manage, events, register, and like events.

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



