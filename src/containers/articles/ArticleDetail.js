import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


// TODO: change edit Comment 

import Comment from '../../components/comment/Comment';
import * as actionCreators from '../../store/actions/index';


class ArticleDetail extends Component {
  state = {
    content : '',
  }

  constructor(props) {
    super(props)
    this.props.onGetArticles()
    this.props.onGetComments()
  }

  clickBackHandler = () => {
      this.props.history.push('/articles')
  }

  clickEditArticleHandler = (article) => {
    this.props.history.push(`/articles/${article.id}/edit`)
  }

  clickDeleteArticleHandler = (article) => {
    this.props.onDeleteArticle(article)
    this.props.history.push('/articles')
  }
  
  clickEditCommentHandler = (comment) => {
    let input = prompt('Edit contents of comment', comment.content)
    if(input === null) return
    else {
      if(input.length > 0) {
        this.props.onEditCommnet(comment, input)
        setTimeout(() => {
          this.forceUpdate()
        }, 2000)
      }
      else alert('user cannot create empty comment')
    }
  }

  clickDeleteCommentHandler = (comment) => {
    this.props.onDeleteComment(comment)
  }

  clickConfirmHandler = (article_id, user_id) => {
    this.props.onCreateComment(article_id, user_id, this.state.content) 
  }

  render () {
    console.log("render")
    let redirect = null
    let loginUser = this.props.storedUsers.find((user) => (user.logged_in))
    if(!loginUser) redirect = <Redirect to ='/login'/>

    let article_id = parseInt(this.props.match.params.id)
    
    let selectedArticle = this.props.storedArticles.find((article) => (article.id === article_id))

    let author = null
    if(selectedArticle) {
      author = this.props.storedUsers.find((user) => (user.id === selectedArticle.author_id))
    }

    let comments = null
    if(loginUser && selectedArticle) {
      const filteredComments = this.props.storedComments.filter((comment) => {
        return (comment.article_id === selectedArticle.id)
      })

      comments = filteredComments.map((comment) => {  
        let writter = this.props.storedUsers.find((user) => {
          return (user.id === comment.author_id)
        })
  
        let visibility = (loginUser.id === comment.author_id) ? true : false
        console.log("render comments", comment)
        return (
          <div className = 'Comment' key = {comment.id}>
            <Comment 
              writter = {writter.name}
              content = {comment.content}/>
            {(visibility) && 
              <button 
              id = 'edit-comment-button'
              onClick = {() => this.clickEditCommentHandler(comment)}>
              edit-comment
              </button>
            }
            {(visibility) && 
              <button 
              id = 'delete-comment-button'
              onClick = {() => this.clickDeleteCommentHandler(comment)}>
              delete-comment
              </button>
            }
          </div>
        )
      })
    }
    
    const articleButtons = () => {
      if(loginUser && selectedArticle) {
        let visibility = (loginUser.id === selectedArticle.author_id) ? true : false
        return (
          <div className = 'ArticleButtons'>
            {(visibility) && 
              <button 
                id = 'edit-article-button'
                onClick = {() => this.clickEditArticleHandler(selectedArticle)}>
                edit-article
              </button>
            }
            {(visibility) &&
              <button 
                  id = 'delete-article-button'
                  onClick = {() => this.clickDeleteArticleHandler(selectedArticle)}>
                  delete-article
              </button>
            }
          </div>
        )
      }
      else return
    }

    return ( 
        <div className = 'ArticleDetail'>
            {redirect}
            <button 
                id = 'back-detail-article-button'
                onClick = {() => this.clickBackHandler()}>
                back-detail-article
            </button>
            <div className = 'ArticleTab'>
                <h1 id = 'article-title'>{selectedArticle.title}</h1>
                {(author) && <h3 id = 'article-author'>{author.name}</h3>}
                <p id = 'article-content'>{selectedArticle.content}</p>
                {articleButtons()}
            </div>
            <div className = 'CommentTab'>
                {comments}
                <p className = 'CommentContent'>
                  <label>Comment</label>
                  <textarea
                      id = 'new-comment-content-input' 
                      type = 'text' 
                      row = '10'
                      value = {this.state.content}
                      onChange = {(event) => this.setState( { content : event.target.value })}
                  > 
                  </textarea>
                </p>
                <button 
                    id = 'confirm-create-comment-button'
                    disabled = {!this.state.content}
                    onClick = {() => this.clickConfirmHandler(selectedArticle.id, loginUser.id)}>
                    confirm-create-comment
                </button>
            </div> 
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetArticles : () => {
      dispatch(actionCreators.getArticles())
    },
    onDeleteArticle : (targetArticle) => {
      dispatch(actionCreators.deleteArticle(targetArticle))
    },
    onGetArticle : (targetArticle) => {
      dispatch(actionCreators.getArticle(targetArticle))
      // dispatch({ type : actionTypes.GET_ARTICLE, targetArticle : targetArticle })
    },
    onGetComments : (modifiedComments) => {
      dispatch(actionCreators.getComments(modifiedComments))
    },
    onCreateComment : (article_id, author_id, content) => {
      dispatch(actionCreators.createComment({ article_id : article_id, author_id : author_id, content : content }))
      // dispatch({ type : actionTypes.CREATE_COMMENT, article_id : article_id, author_id : author_id, content : content})
    },
    onEditCommnet : (targetComment, content) => {
      dispatch(actionCreators.editComment(targetComment, content))
      // dispatch({ type : actionTypes.EDIT_COMMENT, targetComment : targetComment, content : content})
    },
    onDeleteComment : (targetComment) => {
      dispatch(actionCreators.deleteComment(targetComment))
      // dispatch({ type : actionTypes.DELETE_COMMENT, targetComment : targetComment })
    },
  }
}

const mapStateToProps = state => {
  return {
    storedUsers : state.userR.users,
    storedArticles : state.articleR.articles,
    storedComments : state.commentR.comments,
    storedSelectedArticle : state.articleR.selectedArticle,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticleDetail));