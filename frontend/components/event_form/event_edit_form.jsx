import React from "react";




class EditEventForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            location: '',
            description: '',
            start_date: '',
            end_date: '',
            start_time: '',
            end_time: '',
            category_id: 1,
            host_id: this.props.match.params.currentUserId,
            id: this.props.match.params.eventId
        };
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.props.fetchEvent(this.props.event)
    }


    handleSubmit(e){
        e.preventDefault();
        // this.props.createEvent({event: this.state}).then(event => this.props.history.push(`/event/${event.id}`));
        this.props.updateEvent(this.state)

    }

    update(property){
        return e => this.setState({ [property]: e.target.value })
    }


    // update(field){
    //     return e => this.setState({[field]: e.currentTarget.value})
    // }

    render(){

        return (
            <div>

            <form className="event-form" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.title} placeholder="title" onChange={this.update("title")} />
                <input type="text" value={this.state.description} placeholder="description" onChange={this.update("description")} />
                <input type="text" value={this.state.location} placeholder="location" onChange={this.update("location")} />
                <input type="date" value={this.state.start_date} placeholder="start_date" onChange={this.update("start_date")} />
                <input type="date" value={this.state.end_date} placeholder="end_date" onChange={this.update("end_date")} />
                <input type="time" value={this.state.start_time} placeholder="start_time" onChange={this.update("start_time")} />
                <input type="time" value={this.state.end_time} placeholder="end_time" onChange={this.update("end_time")} />
                <div className="button-holder">
                    <button className="new-event-button">Edit Event</button>
                </div>
            </form>
            </div>
        )

    }
}

export default EditEventForm