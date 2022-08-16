import React from "react";
import HomePageNavBarContainer from "../navbars/homepage_nav_bar_container";
import Footer from "../footer/footer";

class LikeIndex extends React.Component{
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
        this.props.fetchLikes(this.props.userId)
    }

    handleClick(like){
        return() => {
            const eventId = like.event_id
            this.props.history.push(`/events/${eventId}`);
        }
    }

    handleDelete(like){
        return () => {
            this.props.deleteLike(like.id)
        }
    }

    render(){
        if(!this.props.likes){
            return null
        }
        const { likes } = this.props;

        let tester= this.props.likes.length > 0 && this.props.likes.map((like) => (
             <div className="regi-bar" onClick={this.handleClick(like)} key={like.id} >
                {/* <h1>hi</h1> */}
                 
              
               
                {/* { new Date(like.start_date).toDateString()},&nbsp;{this.props.event.start_time.slice(11,16)} */}
                <div className="regi-photo">
                    <img src={like.event_photo} alt="background-pic" />
                </div>
                <div className="regi-description-box">
                    <div className="attending">Liked</div>
                    <div className="attending-title"> {like.event_title}</div>
              
                       
                        <div> {new Date(like.event_start_date).toDateString()}</div>
                        <div>{like.event_start_time.slice(11,16)}</div>
                

                </div>
                <div className="deletion">
                <button onClick={this.handleDelete(like)} key={like.id}><i className="fa-solid fa-ban delete-iconss"></i></button>

                </div>
                
            </div>
        ))

        return(
            <div>
                <HomePageNavBarContainer />
                <div className="hoverer">
                    <div className="hover-text">
                        LIKED EVENTS
                    </div>
                </div>
                <div className="regi-container">
                    {tester}
                </div>
                <footer>
                 <Footer />
                </footer>
                {/* <Footer /> */}
            </div>
        )
    }


}

export default LikeIndex