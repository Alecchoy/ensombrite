import { connect } from "react-redux";
import { fetchLikes, deleteLike } from "../../actions/like_actions";
import LikeIndex from "./likes_index";

const mSTP = ({ session, entities: {likes}}) => {
    return {
        userId: session.id,
        likes: Object.values(likes)
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        deleteLike: (likeId) => dispatch(deleteLike(likeId)),
        fetchLikes: (userId) => dispatch(fetchLikes(userId))
    }
}

export default connect(mSTP, mDTP)(LikeIndex)