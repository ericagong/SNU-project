import axios from 'axios';

import * as actionTypes from './ActionTypes';

export const setUser_ = (targetUser) => {
    return { type : actionTypes.SET_USER, targetUser : targetUser }
}

export const setUser = (targetUser) => {
    return dispatch => {
        console.log('[Axios] SetUser')
        return axios.put(`/api/user/${targetUser.id}`, 
        { ...targetUser, logged_in : !targetUser.logged_in})
            .then(response => dispatch(setUser_(targetUser)))
    }
}

export const getUsers_ = (users) => {
    return { type : actionTypes.GET_USERS, users : users }
}

export const getUsers = () => {
    return dispatch => {
        console.log('[Axios] GetUsers')
        return axios.get('/api/user')
            .then(response => dispatch(getUsers_(response.data)))
    }
}

