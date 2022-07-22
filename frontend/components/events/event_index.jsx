import React from "react";
import HomePageNavBar from "../navbars/homepage_nav_bar";
import EventIndexItem from "./event_index_item";
import GreetingContainer from "../greeting/greeting_container";
import HomePageNavBarContainer from "../navbars/homepage_nav_bar_container";



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
                <HomePageNavBarContainer />
            <div className="index-image">
               
            <div className="title-display"> 
                        <p className="the-the">THE</p>
                        <p className="moment-moment">MOMENT</p>
                        <p className="has-has">HAS</p>
                        <p className="come-come">COME</p>

                    </div>
                 
            </div>
            <section className="popular">
                    <div className="categories">
                       <h1>sd</h1>
                    </div>
            </section>
               
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