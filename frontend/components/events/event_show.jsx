import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.fetchEvent()
        // this.props.fetchEvent(this.props.event.id)
    }

    render(){
        return(
            <div>
                {/* <Link to="events/:eventId/edit"> Edit</Link> */}
            yoooooo

            </div>
        )
    }
}

export default EventShow;