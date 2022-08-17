import React from "react";
// import HomePageNavBarContainer from "./navbars/homepage_nav_bar_container";
import GreetingContainer from "../greeting/greeting_container";
import HomePageNavBarContainer from "../navbars/homepage_nav_bar_container";
import Footer from "../footer/footer";



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
            category: '',
            host_id: this.props.currentUserId,
            id: this.props.match.params.eventId,
            imageFile: null,
            imageUrl: null
        };
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.props.fetchEvent(this.props.event)
    }

    


    handleSubmit(e){
        ('this.state', this.props)
        e.preventDefault();
        const formData = new FormData();

        formData.append('event[title]', this.state.title);
        formData.append('event[description]', this.state.description);
        formData.append('event[location]', this.state.location);
        formData.append('event[start_date]', this.state.start_date);
        formData.append('event[start_time]', this.state.start_time);
        formData.append('event[end_date]', this.state.end_date);
        formData.append('event[end_time]', this.state.end_time);
        formData.append('event[category]', this.state.category);
        formData.append('event[host_id]', this.state.host_id );
        if (this.state.imageFile){
            formData.append('event[photo]', this.state.imageFile);
        }
        $.ajax({
            url: `/api/users/${this.props.currentUserId}/events/${parseFloat(this.props.match.params.eventId)}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false
        }).then(()=>this.props.history.push(`/`))
      
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
    
    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`errors-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    // update(field){
    //     return e => this.setState({[field]: e.currentTarget.value})
    // }

    render(){
        const previewImg = this.state.imageUrl ? <div className="image-preview"><img src={this.state.imageUrl}/></div> : null;

        return (
            <div className="event-detail">
                <HomePageNavBarContainer />
            <div className="custom1"></div>
            <div className="custom2"></div>
            <div className="custom3"></div>
            
            <form className="event-form" onSubmit={this.handleSubmit}>
                <div className="event-form-title">
                     <div id="basic-title" className="basic-info">Basic Info</div> 
                     <div className="how-to-info">
                        Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.
                     </div>
                    <br />
                    <div className="event-form-category">
                        <div id="tit">
                        <input type="text" value={this.state.title} placeholder="title" onChange={this.update("title")} className="fill-out-event-form-1"/>
                        </div>
                        <div id="cat">
                            <input type="text" value={this.state.category} placeholder="category" onChange={this.update("category")}  className="fill-out-event-form-1" />
                        </div>
                    </div>
                </div>
                <br />
                <div className="event-form-location">
                    <div id="basic-title" className="basic-location">Location</div>
                    <div className="how-to-location">
                    Help people in the area discover your event and let attendees know where to show up.
                    </div>
                    <input type="text" value={this.state.location} placeholder="location" onChange={this.update("location")}  id="location-box" className="fill-out-event-form"/>
                </div>
                <br />

                <div className="event-location-big" id="basic-title">Date and Time</div>
                <div className="how-to-date">Tell event-goers when your event starts and ends so they can make plans to attend. </div>
                <div className="event-form-dates-boxes">
                    <div className="event-form-datetime-box">
                        <div className="event-form-datetime">
                            <input type="date" value={this.state.start_date} placeholder="start_date" onChange={this.update("start_date")}  className="fill-out-event-form-datetime"/>
                        </div>
                        <div className="event-form-datetime">
                            <input type="time" value={this.state.start_time} placeholder="start_time" onChange={this.update("start_time")}  className="fill-out-event-form-datetime"/>
                        </div>
                    </div>
                    <div className="event-form-datetime-box">
                        <div className="event-form-datetime">
                        <input type="date" value={this.state.end_date} placeholder="end_date" onChange={this.update("end_date")}  className="fill-out-event-form-datetime" />
                        </div>

                        <div className="event-form-datetime">
                            <input type="time" value={this.state.end_time} placeholder="end_time" onChange={this.update("end_time")}  className="fill-out-event-form-datetime" />
                        </div>
                    </div>
                </div>
           

                <div className="event-form-photo">
                    <div className="image-big">Main Event Image</div>
                    <div className="how-to-image">This is the first image attendees will see at the top of your listing. Use a high quality image: 2160x1080px (2:1 ratio).</div>
                    <div className="img-preview">
                            <div className="insert-here">[insert image here] </div>
                            <div className="actual-preview"> 
                                {previewImg}
                                </div>
                        
                    </div>
                    <br />
                    <div>
                    <input type="file" onChange={this.handleFile.bind(this)}/>
                    </div>
                </div>
                <br />
                <div className="button-holder"> 
                <div className="description-section">
                    <div className="description-titler">Description</div>
                    <div className="how-to-describe">
                    Add more details to your event like your schedule, sponsors, or featured guests.
                    </div>
                    <div className="event-form-description">
                        <textarea type="text" value={this.state.description} placeholder="description" onChange={this.update("description")} className="fill-out-event-form-2" />
                    </div>    
                </div>
                {/* {this.renderErrors()} */}
                
                    <button  className="submit-form">Save</button>
                </div>
            </form>
           
        </div>
        )

    }
}

export default EditEventForm