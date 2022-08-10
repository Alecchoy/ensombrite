import * as LikeAPIUtil from "../util/like_api_util";

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKES = 'RECEIVE_LIKES';

export const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
})

export const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
})

export const removeLike = (likeId) => ({
    type: REMOVE_LIKE,
    likeId
})

export const fetchLikes = userId => dispatch => {
    return(
        LikeAPIUtil.fetchLikes(userId).then(likes => {
            dispatch(receiveLikes(likes))
        })
    )
}

export const createLike = eventId => dispatch => {
    return(
        LikeAPIUtil.createLike(eventId).then(like => {
            dispatch(receiveLike(like))
        })
    )
}

export const deleteLike = likeId => dispatch => {
    return(
        LikeAPIUtil.deleteLike(likeId).then((like) => dispatch(removeLike(like.id)))
    )
}