import React from 'react';
import HomePageNavBarContainer from '../navbars/homepage_nav_bar_container';
import GreetingContainer from "../greeting/greeting_container";

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
            category: '',
            host_id: this.props.currentUserId,
            imageFile: null,
            imageUrl: null
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        console.log('state', this.state)
        e.preventDefault();
        // this.props.createEvent({event: this.state}).then(event => this.props.history.push(`/event/${event.id}`));

        const formData = new FormData();

        formData.append('event[title]', this.state.title);
        formData.append('event[description]', this.state.description);
        formData.append('event[location]', this.state.location);
        formData.append('event[start_date]', this.state.start_date);
        formData.append('event[start_time]', this.state.start_time);
        formData.append('event[end_date]', this.state.end_date);
        formData.append('event[end_time]', this.state.end_time);
        formData.append('event[category]', this.state.category);
        formData.append('event[host_id', this.state.host_id );
        if (this.state.imageFile){
            formData.append('event[photo]', this.state.imageFile);
        }
        $.ajax({
            url: '/api/events',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        })
       
        this.props.history.push(`/`)
    }

    update(property){
        return e => this.setState({ [property]: e.target.value })
    }

    handleFile(e){
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            this.setState({imageFile: file, imageUrl: fileReader.result})
        }

        if (file){
            fileReader.readAsDataURL(file)
        }
    }



    render(){
        // console.log('state',state)
        const previewImg = this.state.imageUrl ? <div className="image-preview"><img src={this.state.imageUrl}/></div> : null;
        
        return(

        <div className="event-detail">
                <HomePageNavBarContainer />
       
            
            <form className="event-form" onSubmit={this.handleSubmit}>
                <div className="event-form-title">
                    <input type="text" value={this.state.title} placeholder="title" onChange={this.update("title")} className="fill-out-event-form"/>
                </div>
                <br />
                <div className="event-form-location">
                    <input type="text" value={this.state.location} placeholder="location" onChange={this.update("location")}  className="fill-out-event-form"/>
                </div>
                <div className="event-form-photo">
                    <input type="file" onChange={this.handleFile.bind(this)}/>
                    {previewImg}
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
                <div className="event-form-datetime">
                        <input type="text" value={this.state.category} placeholder="category" onChange={this.update("category")}  className="fill-out-event-form-datetime" />
                        </div>

                
                <div className="event-form-title">

                    <div className="event-form-datetime-box">

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