import { connect } from 'react-redux';

import { createEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mSTP = (state, {errors} )=> {
    return {
        currentUserId: state.session.id,
    }

}

const mDTP = dispatch => {
    return {
        action: formData => dispatch(createEvent(formData))
    }

}

export default connect(mSTP, mDTP)(EventForm);