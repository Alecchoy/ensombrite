import React from 'react';

class EventForm extends React.Component {
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
            host_id: this.props.currentUserId
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        // this.props.createEvent({event: this.state}).then(event => this.props.history.push(`/event/${event.id}`));
        this.props.createEvent(this.state)
        this.props.history.push(`/`)
    }

    update(property){
        return e => this.setState({ [property]: e.target.value })
    }


    render(){

        return(

        <div className="event-detail">
       
            
            <form className="event-form" onSubmit={this.handleSubmit}>
                <div className="event-form-title">
                    <input type="text" value={this.state.title} placeholder="title" onChange={this.update("title")} className="fill-out-event-form"/>
                </div>
                <br />
                <div className="event-form-location">
                    <input type="text" value={this.state.location} placeholder="location" onChange={this.update("location")}  className="fill-out-event-form"/>
                </div>
                <br />
                <div className="event-form-title">
                    <div className="event-form-datetime-box">
                        <div className="event-form-datetime">
                            <input type="date" value={this.state.start_date} placeholder="start_date" onChange={this.update("start_date")}  className="fill-out-event-form-datetime"/>
                        </div>
                        <div className="event-form-datetime">
                            <input type="time" value={this.state.start_time} placeholder="start_time" onChange={this.update("start_time")}  className="fill-out-event-form-datetime"/>
                        </div>
                    </div>
                </div>
                
                <br />
                
                <div className="event-form-title">

                    <div class="event-form-datetime-box">

                        <div className="event-form-datetime">
                        <input type="date" value={this.state.end_date} placeholder="end_date" onChange={this.update("end_date")}  className="fill-out-event-form-datetime" />
                        </div>

                        <div className="event-form-datetime">
                            <input type="time" value={this.state.end_time} placeholder="end_time" onChange={this.update("end_time")}  className="fill-out-event-form-datetime" />
                        </div>
                    </div>
                </div>

                <div className="button-holder"> 
                <br />
                <div className="event-form-description">
                    <input type="text" value={this.state.description} placeholder="description" onChange={this.update("description")} className="fill-out-event-form" />
                </div>
                <br />
                    <button className="new-event-button">Create Event</button>
                </div>
            </form>
        </div>
        )
        
    }
}

export default EventForm;