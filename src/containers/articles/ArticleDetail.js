import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Comment from '../../components/comment/Comment';
import * as actionTypes from '../../store/actions/ActionTypes';


class ArticleDetail extends Component {
  state = {
    user : {},
    article : {},
    author : {},
    content : '',
  }

  constructor(props) {
    super(props)
    this.state.user = this.props.storedUsers.find((user) => {
        return (user.logged_in === true)
    })
    this.state.article = this.props.storedSelectedArticle
    const article_id = parseInt(this.props.match.params.id)
    
    if(this.state.article.id !== article_id) {
      this.state.article = this.props.storedArticles.find((article) => {
        return (article.id === article_id)
      })
    }

    this.state.author = this.props.storedUsers.find((user) => {
      return (user.id === this.state.article.author_id)
    })

    console.log('[Constructor]')
    console.log("user :: " , this.state.user)
    console.log("article :: ", this.state.article)
    console.log("author :: ", this.state.author)
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
      }
      else alert('user cannot create empty comment')
    }
  }

  clickDeleteCommentHandler = (comment) => {
    this.props.onDeleteComment(comment)
  }

  clickConfirmHandler = () => {
    this.props.onCreateComment(this.state.article.id, this.state.user.id, this.state.content) 
  }

  render () {
    let comments = null
    if(this.state.article && this.state.user) {
      const filteredComments = this.props.storedComments.filter((comment) => {
        return (comment.article_id === this.state.article.id)
      })

      comments = filteredComments.map((comment) => {  
        let writter = this.props.storedUsers.find((user) => {
          return (user.id === comment.author_id)
        })
  
        let visibility = (this.state.user.id === comment.author_id) ? true : false
        
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
      if(this.state.user && this.state.article) {
        let visibility = (this.state.user.id === this.state.article.author_id) ? true : false
        return (
          <div className = 'ArticleButtons'>
            {(visibility) && 
              <button 
                id = 'edit-article-button'
                onClick = {() => this.clickEditArticleHandler(this.state.article)}>
                edit-article
              </button>
            }
            {(visibility) &&
              <button 
                  id = 'delete-article-button'
                  onClick = {() => this.clickDeleteArticleHandler(this.state.article)}>
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
            <button 
                id = 'back-detail-article-button'
                onClick = {() => this.clickBackHandler()}>
                back-detail-article
            </button>
            <div className = 'ArticleTab'>
                <h1 id = 'article-title'>{this.state.article.title}</h1>
                <h3 id = 'article-author'>{this.state.author.name}</h3>
                <p id = 'article-content'>{this.state.article.content}</p>
                {articleButtons()}
            </div>
            <div className = 'CommentTab'>
                {comments}
                <textarea
                    id = 'new-comment-content-input' 
                    type = 'text' 
                    row = '10'
                    placeholder = 'Comment'
                    value = {this.state.content}
                    onChange = {(event) => this.setState( { content : event.target.value })}
                > 
                </textarea>
                <button 
                    id = 'confirm-create-comment-button'
                    disabled = {!this.state.content}
                    onClick = {() => this.clickConfirmHandler()}>
                    confirm-create-comment
                </button>
            </div> 
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  // TODO : delete not-required actionTypes
  return {
    onDeleteArticle : (targetArticle) => {
      dispatch({ type : actionTypes.DELETE_ARTICLE, targetArticle : targetArticle })
    },
    onGetArticle : (targetArticle) => {
      dispatch({ type : actionTypes.GET_ARTICLE, targetArticle : targetArticle })
    },
    onGetComments : (modifiedComments) => {
      dispatch({ type : actionTypes.GET_COMMENTS , modifiedComments : modifiedComments })
    },
    onCreateComment : (article_id, author_id, content) => {
      dispatch({ type : actionTypes.CREATE_COMMENT, article_id : article_id, author_id : author_id, content : content})
    },
    onEditCommnet : (targetComment, content) => {
      dispatch({ type : actionTypes.EDIT_COMMENT, targetComment : targetComment, content : content})
    },
    onDeleteComment : (targetComment) => {
      dispatch({ type : actionTypes.DELETE_COMMENT, targetComment : targetComment })
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