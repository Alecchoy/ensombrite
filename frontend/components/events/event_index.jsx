import React from "react";
import EventIndexItem from "./event_index_item";



class EventIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchEvents();
    }

    render(){
        return(
            <div>
            <section className="index-image">
                <img src="" alt="" />
                 
            </section>
            <section className="popular">
                    POPULAR
            </section>
            <section className="popular">
                    CATEGORIES 
            </section>
                <h1>Events</h1>
                <div className="all-events">
              
                    {this.props.events.map(event => (
                        
                            <EventIndexItem event={event} key={event.id}/>
            
                    ))}

                </div>
            </div>
        )
    }
}



export default EventIndex; 