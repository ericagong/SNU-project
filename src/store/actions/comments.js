import axios from 'axios';

import * as actionTypes from './ActionTypes';

export const getComments_ = (comments) => {
    return { type : actionTypes.GET_COMMENTS, comments: comments }
}

export const getComments = () => {
    console.log('[Axios] GetComments')
    return dispatch => {
        return axios.get('/api/comments')
            .then(response => dispatch(getComments_(response.data)))
    }
}

export const createComment_ = (newComment) => {
    return { type : actionTypes.CREATE_COMMENT, 
            id : newComment.id, 
            article_id : newComment.article_id,
            author_id : newComment.author_id,
            content : newComment.content,
    }
}

export const createComment = (newComment) => {
    console.log('[Axios] CreateComment')
    return dispatch => {
        return axios.post('/api/comments', newComment)
            .then(response => {
                dispatch(createComment_(response.data))
            })
    }
}

export const editComment_ = (targetComment, editContent) => {
    return { type : actionTypes.EDIT_COMMENT, 
            targetComment : targetComment,
            editContent : editContent,
    }
}

export const editComment = (targetComment, editContent) => {
    console.log('[Axios] EditComment')
    return dispatch => {
        return axios.put(`/api/comments/${targetComment.id}`, 
        { ...targetComment, content : editContent })
        .then(response => dispatch(editComment_(targetComment, editContent)))
    }
}

export const deleteComment_ = (targetComment) => {
    return { type : actionTypes.DELETE_COMMENT, targetComment : targetComment }
}

export const deleteComment = (targetComment) => {
    console.log('[Axios] DeleteComment')
    return dispatch => {
        return axios.delete(`/api/comments/${targetComment.id}`)
        .then(response => dispatch(deleteComment_(targetComment)))
    }
}