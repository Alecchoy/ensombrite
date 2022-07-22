import { connect } from 'react-redux';

import { createEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mSTP = state => {
    return {
        currentUserId: state.session.id
    }

}

const mDTP = dispatch => ({
    createEvent: (event) => dispatch(createEvent(event))
})

export default connect(mSTP, mDTP)(EventForm);