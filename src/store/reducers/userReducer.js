import * as actionTypes from '../actions/ActionTypes';

const initialUserState = {
    users : [
        {
          "id": 1,
          "email": "swpp@snu.ac.kr",
          "password": "iluvswpp",
          "name": "Software Lover",
          "logged_in": true
        },
        {
          "id": 2,
          "email": "alan@turing.com",
          "password": "iluvswpp",
          "name": "Alan Turing",
          "logged_in": false
        },
        {
          "id": 3,
          "email": "edsger@dijkstra.com",
          "password": "iluvswpp",
          "name": "Edsger Dijkstra",
          "logged_in": false
        }
    ],
    loginUser : null
}

// export const SET_USER = 'SET_USER'
// export const GET_USERS = 'GET_USERS'

const userReducer = (state = initialUserState, action) => {
    switch(action.type) {
        case actionTypes.GET_USERS:
            return state
        case actionTypes.SET_USER:
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