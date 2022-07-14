import React from "react";
// import { fetchEvent, updateEvent } from "../../actions/event_actions";
import EventForm from "./event_form";


class EditEventForm extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = this.props.event;
    //     this.handleSubmit= this.handleSubmit.bind(this)
    // }
    componentDidMount(){
        this.props.fetchEvent(this.props.post.id)
    }
    // update(field){
    //     return e => this.setState({[field]: e.currentTarget.value})
    // }

    render(){
        const { action, formType, event } = this.props;

        if (!event) return null;
        return (
            <EventForm action={action} formType={formType} event={event} />
        )

    }
}

export default EditEventForm