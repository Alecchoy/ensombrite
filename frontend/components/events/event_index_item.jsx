import React from "react";
import { withRouter } from "react-router-dom";
import Footer from "../footer/footer";


class EventIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleLike = this.handleLike.bind(this)
       
    }

    // componentDidMount(){
    //     this.props.fetchEvent(this.props.event.id)
    // }

    handleClick() {
        const eventId = this.props.event.id
        this.props.history.push(`/events/${eventId}`);
    }

    handleLike(){
        // debugger

        console.log("UNDEFINED FIND???", this.props.event.likes)

        const currentLike = this.props.event.likes.find(({user_id}) => user_id === this.props.currentUserId)
        console.log("CURRENT LIKE ", currentLike)
        if(!currentLike){
            this.props.createLike(this.props.event.id).then(()=> this.props.fetchEvents()).then(()=> this.props.fetchLikes())
        
        } else {
            this.props.deleteLike(currentLike.id).then(()=> this.props.fetchEvents()).then(()=> this.props.fetchLikes())
        }
        console.log()
        
        // this.props.fetchEvent(this.props.event.id)

    

    }

    render(){
        // const { title, description, location, start_date, end_date, start_time, end_time } = this.props.event;
        // onClick={this.handleClick}
        if(!this.props.event.likes){return null}
        return (
            <div className="event-index-item">
                <div onClick={this.handleClick}>
                    <div className="index-item-image">
                        <img src={this.props.event.photo} alt="" className="index-photo"/>
                    </div>
                    <div className="event-index-info" key={this.props.key}>
                        {/* <span className="index-item-category">Title:</span> */}
                        <div className="event-index-title-box">
                        <span className="index-item-copy" id="index-title">{this.props.event.title}</span>
                        </div>
                        {/* <span className="index-item-category">Description:</span> */}
                        {/* <span className="index-item-copy">{description}</span> */}
                    
                        {/* <span className="index-item-category">Location:</span> */}
                    
                        {/* <span className="index-item-category">Start Date:</span> */}
                        <span className="index-item-copy" id="index-startdate">{ new Date(this.props.event.start_date).toDateString()},&nbsp;{this.props.event.start_time.slice(11,16)} </span>
                    
                        <br />
                        <span className="index-item-copy" id="index-location">{this.props.event.location}</span>
                        {/* <span className="index-item-category">Start Time:</span> */}
                        {/* <span className="index-item-copy" id="index-starttime">{start_time}</span> */}
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                
                  <div onClick={this.handleLike}>
                    <div>
                    <i className={`fa-solid fa-heart ${ this.props.event.likes.find(({user_id}) => user_id === this.props.currentUserId) ? "liked" : "unliked"}`} id="like-button"></i>
                    {/* <span class="material-symbols-outlined" id="like-circle">circle</span> */}
                    <i className="fa-solid fa-circle" id="like-circle"></i>
                    </div>

                  </div>
                  
            </div>
        )
    }
}

export default withRouter(EventIndexItem)