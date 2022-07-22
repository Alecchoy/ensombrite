import React from "react";
import  ReactDOM  from "react-dom";
import Root from "./components/root";
import { fetchEvents, updateEvent, deleteEvent, fetchCreatedEvents } from "./actions/event_actions";
import { fetchRegistrations } from "./actions/registration_actions";

import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
      const preloadedState = {
        entities: {
          users: { [window.currentUser.id]: window.currentUser }
        },
      session: { id: window.currentUser.id }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }

    const root = document.getElementById("root");
    window.dispatch = store.dispatch;
    window.getState = store.dispatch;
    window.store = store; 
    window.fetchEvents = fetchEvents;
    window.updateEvent = updateEvent;
    window.deleteEvent = deleteEvent;
    window.fetchRegistrations = fetchRegistrations;
    window.fetchCreatedEvents = fetchCreatedEvents;
   
 
    ReactDOM.render(<Root store={store}/>, root)
      // ReactDOM.render( <h1>Its working</h1>, root)
})