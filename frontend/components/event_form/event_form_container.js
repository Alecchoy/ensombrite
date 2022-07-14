import { connect } from 'react-redux';

import { createEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mDTP = dispatch => ({
    createEvent: event => dispatch(createEvent(event))
})

export default connect(null, mDTP)(EventForm);