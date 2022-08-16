import React from "react";
import HomePageNavBar from "../navbars/homepage_nav_bar";
import EventIndexItem from "./event_index_item";
import GreetingContainer from "../greeting/greeting_container";
import HomePageNavBarContainer from "../navbars/homepage_nav_bar_container";
import Footer from "../footer/footer";
import { Link  } from 'react-router-dom';



class EventIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            index: 0
        }

        this.filterCategory = this.filterCategory.bind(this)
    }

    componentDidMount(){
        this.props.fetchEvents();
        this.props.fetchLikes(this.props.currentUserId);
    }

    filterCategory(index){
        this.setState({index});
    }


    render(){
        if(!this.props.like){return null}
        if(!this.props.events){return null}
        const {events} = this.props;

        const categoryList = [
            'All',
            'Performing & Visual Arts',
            'Music Festival',
            'Travel & Outdoor',
            'Health',
            'Sports & Fitness',
            'Business',
            'Food & Drink',
            'Hobbies'
        ]

        let selectedCategory = this.state.index;
        
        const categories = categoryList.map((category, index) => {
                const currentClass = index === selectedCategory ? ('active', 'active-one') : ('inactive', 'deactive');
                return (
                    <div className="cat-list">
                        <li key={index} className={currentClass} onClick={() => this.filterCategory(index)}>{category}</li>

                    </div>
                )
        })

        let filteredEvents;
            switch(this.state.index){
                case 0:
                    filteredEvents = events;
                    break;
                case 1:
                    filteredEvents = events.filter(event => event.category === "Performing & Visual Arts");
                    break;
                case 2:
                    filteredEvents = events.filter(event => event.category === "Music Festival");
                    break;
                case 3:
                    filteredEvents = events.filter(event => event.category === "Travel & Outdoor");
                    break;
                case 4:
                    filteredEvents = events.filter(event => event.category === "Health");
                    break;
                case 5:
                    filteredEvents = events.filter(event => event.category === "Sport & Fitness");
                    break;
                case 6:
                    filteredEvents = events.filter(event => event.category === "Business");
                    break;
                case 7:
                    filteredEvents = events.filter(event => event.category === "Food & Drink");
                    break;
                case 8:
                    filteredEvents = events.filter(event => event.category === "Hobbies");
                    break;

            }
            if(!filteredEvents){return null}
        
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

            <div className="category-list-container">
                <div className="category-title">Categories</div>
                <ul className="category-list">
                    {categories}
                </ul>
            </div>
               
                <div className="all-events">
              
                    {filteredEvents.map(event => (
                        
                            <EventIndexItem event={event} 
                                            like={this.props.like} 
                                            key={event.id} 
                                            createLike={this.props.createLike} 
                                            currentUserId={this.props.currentUserId} 
                                            deleteLike={this.props.deleteLike} 
                                            fetchLikes={this.props.fetchLikes} 
                                            fetchEvents={this.props.fetchEvents} 
                                            fetchEvent={this.props.fetchEvent}/>
            
                    ))}

                </div>
                <Footer />
            </div>
        )
    }
}



export default EventIndex; 