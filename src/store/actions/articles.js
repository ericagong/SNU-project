import axios from 'axios';

import * as actionTypes from './ActionTypes';

export const getArticles_ = (articles) => {
    return { type : actionTypes.GET_ARTICLES, articles : articles }
}

export const getArticles = () => {
    return dispatch => {
        return axios.get('/api/articles')
            .then(response => dispatch(getArticles_(response.data)))
    }
}

export const getArticle_ = (targetArticle) => {
    return { type : actionTypes.GET_ARTICLE, targetArticle : targetArticle }
}

export const getArticle = (targetArticle) => {
    return dispatch => {
        return axios.get(`/api/articles/${targetArticle.id}`)
            .then(response => dispatch(getArticle_(response.data)))
    }
}

export const createArticle_ = (newArticle) => {
    return { type : actionTypes.CREATE_ARTICLE, 
            id : newArticle.id, 
            author_id : newArticle.author_id,
            title : newArticle.title,
            content : newArticle.content,
    }
}

export const createArticle = (newArticle) => {
    return dispatch => {
        return axios.post('/api/articles', newArticle)
            .then(response => {
                dispatch(createArticle_(response.data))
                dispatch(getArticle_(response.data))
            })
    }
}

export const editArticle_ = (targetArticle, editTitle, editContent) => {
    return { type : actionTypes.EDIT_ARTICLE, 
            targetArticle : targetArticle,
            editTitle : editTitle, 
            editContent : editContent,
    }
}

export const editArticle = (targetArticle, editTitle, editContent) => {
    return axios.put(`/api/articles/${targetArticle.id}`, 
        { ...targetArticle, title : editTitle, content : editContent })
        .then(response => dispatch(editArticle_(targetArticle, editTitle, editContent)))
}

export const deleteArticle_ = (targetArticle) => {
    return { type : actionTypes.DELETE_ARTICLE, targetArticle : targetArticle }
}

export const deleteArticle = (targetArticle) => {
    return axios.delete(`/api/articles/${targetArticle.id}`)
        .then(response => dispatch(deleteArticle_(targetArticle)))
}