import React from "react";
import HomePageNavBarContainer from "../navbars/homepage_nav_bar_container";

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
            <div className="regi-bar" key={like.id}>
                {like.event_title}
                { new Date(like.event_start_date).toDateString().split(" ")[1]}
                { new Date(like.event_start_date).toDateString().split(" ")[2]}
                <div>
                    <button onClick={this.handleDelete(like)} key={like.id}> delete </button>
                </div>
            </div>
        ))

        return(
            <div>
                <HomePageNavBarContainer />
                <div className="regi-container">
                    {tester}
                </div>
            </div>
        )
    }


}

export default LikeIndex