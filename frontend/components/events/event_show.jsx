import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component{
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    
    componentDidMount(){
        this.props.fetchEvent()
        // this.props.fetchEvent(this.props.event.id)
    }

    handleDelete(){
        this.props.deleteEvent()
        // .then(() => (this.props.history.push('/')))
        this.props.history.push(`/`)
    }

    render(){
        return(
            <div>
                {/* <Link to={`/events/${this.props.event.id}/edit`}> Edit</Link> */}
                
                {/* <button onClick={() => this.handleDelete()}>DELETE
                 
                </button> */}
            <h1>
                yoooooo
                
                </h1> 

            </div>
        )
    }
}

export default EventShow;