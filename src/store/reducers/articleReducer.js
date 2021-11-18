import * as actionTypes from '../actions/ActionTypes';

const initialArticleState = {
  articles: [],
  selectedArticle : {}
}

const articleReducer = (state = initialArticleState, action) => {
  switch(action.type) {
    case actionTypes.GET_ARTICLES:
      console.log('GET_ARTICLES')
      return { ...state, articles : action.articles }
    case actionTypes.GET_ARTICLE:
      console.log('GET_ARTICLE')
      const target = state.articles.find((article) => (article.id === action.targetArticle.id))
      return { ...state, selectedArticle : target }
    case actionTypes.CREATE_ARTICLE:
      console.log('CREATE_ARTICLE')
      let length = state.articles.length
      let lastArticle = state.articles[length-1]
      const newArticle = {
        id : lastArticle.id + 1,
        author_id : action.author_id,
        title : action.title,
        content : action.content
      }
      return { ...state, articles : [ ...state.articles, newArticle ], selectedArticle : newArticle }
    case actionTypes.EDIT_ARTICLE:
      console.log('EDIT_ARTICLE')
      const modifiedArticles = state.articles.map((article) => {
        if(article.id === action.targetArticle.id) {
          return { ...article, title : action.editTitle, content : action.editContent }
        }
        else return { ...article }
      })
      const modifiedArticle = {
        id : action.targetArticle.id,
        author_id : action.targetArticle.author_id,
        title : action.editTitle,
        content : action.editContent,
      }
      console.log("modified :: ", modifiedArticles)
      return { ...state, articles : modifiedArticles, selectedArticle : modifiedArticle }
    case actionTypes.DELETE_ARTICLE:
      console.log('DELETE_ARTICLE')
      const deleted = state.articles.filter((article) => {
        return (article.id !== action.targetArticle.id)
      })
      console.log(deleted)
      return { ...state, articles : deleted }
    default:
      return state
  }
}

export default articleReducer;