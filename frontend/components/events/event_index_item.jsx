import React from "react";
import { withRouter } from "react-router-dom";
import Footer from "../footer/footer";


class EventIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleLike = this.handleLike.bind(this)
       
    }


    handleClick() {
        const eventId = this.props.event.id
        this.props.history.push(`/events/${eventId}`);
    }

    handleLike(){
        const currentLike = this.props.event.likes.find(({user_id}) => user_id === this.props.currentUserId)
        if(!currentLike){
            this.props.createLike(this.props.event.id).then(()=> this.props.fetchEvents()).then(()=> this.props.fetchLikes())
        
        } else {
            this.props.deleteLike(currentLike.id).then(()=> this.props.fetchEvents()).then(()=> this.props.fetchLikes())
        }
    }

    render(){
        if(!this.props.event.likes){return null}
        return (
            <div className="event-index-item">
                <div onClick={this.handleClick}>
                    <div className="index-item-image">
                        <img src={this.props.event.photo} alt="" className="index-photo"/>
                    </div>
                    <div className="event-index-info" key={this.props.key}>
                        <div className="event-index-title-box">
                        <span className="index-item-copy" id="index-title">{this.props.event.title}</span>
                        </div>
                        <span className="index-item-copy" id="index-startdate">{ new Date(this.props.event.start_date).toDateString()},&nbsp;{this.props.event.start_time.slice(11,16)} </span>
                    
                        <br />
                        <span className="index-item-copy" id="index-location">{this.props.event.location}</span>
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
                    <i className={`fa-solid fa-thumbs-up addition ${ this.props.event.likes.find(({user_id}) => user_id === this.props.currentUserId) ? "liked" : "unliked"}`} id="like-button"></i>
                    <i className="fa-solid fa-circle" id="like-circle"></i>
                    </div>

                  </div>
                  
            </div>
        )
    }
}
export default withRouter(EventIndexItem)