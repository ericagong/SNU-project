import * as actionTypes from '../actions/ActionTypes';

const initialCommentState = {
  comments : [],
  selectedComment : null
}

// export const GET_COMMENTS = 'GET_COMMENTS'
// export const CREATE_COMMENT = 'CREATE_COMMENT'
// export const EDIT_COMMENT = 'EDIT_COMMENT'
// export const DELETE_COMMENT = 'DELETE_COMMENT'

const commentReducer = (state = initialCommentState, action) => {
  switch(action.type) {
    case actionTypes.GET_COMMENTS:
      console.log("GET_COMMENTS")
      return { ...state, comments : action.comments } 
    case actionTypes.CREATE_COMMENT:
      console.log("CREATE_COMMENT")
      let length = state.comments.length
      let lastComment = state.comments[length-1]
      const newComment = {
        id : lastComment.id + 1,
        article_id : action.article_id,
        author_id : action.author_id,
        content : action.content,
      }
      return { ...state, comments : [ ...state.comments, newComment ]}
    case actionTypes.EDIT_COMMENT:
      console.log("EDIT_COMMENT")
      const modified = state.comments.map((comment) => {
        if(comment.id === action.targetComment.id) {
          return { ...comment, content : action.content }
        }
        else return { ...comment }
      })
      return { ...state, comments : modified }
    case actionTypes.DELETE_COMMENT:
      const deleted = state.comments.filter((comment) => {
        return (comment.id !== action.targetComment.id)
      })
      return { ...state, comments : deleted }
    default:
      return state
  }
}

export default commentReducer;