import React from "react";
import HomePageNavBar from "../navbars/homepage_nav_bar";
import EventIndexItem from "./event_index_item";
import GreetingContainer from "../greeting/greeting_container";
import HomePageNavBarContainer from "../navbars/homepage_nav_bar_container";
import { Link  } from 'react-router-dom';



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
                        <p id="each-word" className="the-the">THE</p>
                        <p id="each-word" className="moment-moment">MOMENT</p>
                        <p id="each-word" className="has-has">HAS</p>
                        <p id="each-word" className="come-come">COME</p>
                        <p id="each-word" className="exclaim">!</p>
                        <p id="each-word" className="dash">-</p>
                        <p id="each-word" className="dash2">-</p>

            </div>
            <p><Link to={'/events/new'}><div className="picture-button"> Create an Event </div></Link></p>
                 
            </div>
            <section className="popular">
                    <div className="categories">
                       <div className="pop">Popular in </div>
                       <div className="arr">
                        <span className="material-symbols-outlined" id="down-arrow1">
                        expand_more
                        </span>  

                       </div>
                        <div className="usa"> United States</div>
                
                    </div>
            </section>
               
                <div className="all-events">
              
                    {this.props.events.map(event => (
                        
                            <EventIndexItem event={event} key={event.id} createLike={this.props.createLike}/>
            
                    ))}

                </div>
            </div>
        )
    }
}



export default EventIndex; 