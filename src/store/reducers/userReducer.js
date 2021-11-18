import * as actionTypes from '../actions/ActionTypes';

const initialUserState = {
    users : [],
    loginUser : null
}

// export const SET_USER = 'SET_USER'
// export const GET_USERS = 'GET_USERS'

const userReducer = (state = initialUserState, action) => {
    switch(action.type) {
        case actionTypes.GET_USERS:
            console.log('GET_USERS')
            return { ...state, users : action.users }
        case actionTypes.SET_USER:
            console.log('SET_USER')
            const modified = state.users.map((user) => {
                if(user.id === action.targetUser.id) {
                    return { ...user, logged_in : !user.logged_in }
                }
                else return { ...user }
            })
            return { ...state, users : modified }
        default:
            return state
    }
}

export default userReducer;