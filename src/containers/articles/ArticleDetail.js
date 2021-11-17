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
    // comments : [],
    content : '',
  }

  constructor(props) {
    super(props)
    this.state.user = this.props.storedUsers.find((user) => {
        return (user.logged_in === true)
    })
    // this.state.article_id = parseInt(this.props.match.params.id)
    // this.state.comments = this.props.storedComments
    this.state.article = this.props.storedSelectedArticle
    console.log("Selected article", this.props.storedSelectedArticle)
    
    this.state.author = this.props.storedUsers.find((user) => {
      return (user.id === this.state.article.author_id)
    })

    console.log('[Constructor]')
    console.log("user :: " , this.state.user)
    console.log("targetArticle ;:" , this.props.storedSelectedArticle)
    console.log("article :: ", this.state.article)
    console.log("author :: ", this.state.author)
    // console.log("comments :: ", this.state.comments)
  }

  clickBackHandler = () => {
      this.props.history.push('/articles')
  }

  clickEditArticleHandler = (article_id) => {
    this.props.history.push(`/articles/${article_id}/edit`)
  }

  clickDeleteArticleHandler = () => {
      this.props.history.push('/articles')
  }
  
  clickConfirmHandler = () => {
    this.props.onCreateComment(this.state.article.id, this.state.user.id, this.state.content) 
    this.props.onGetComments()
    
  }

  // TODO: add edit button
  clickEditCommentHandler = () => {
    prompt("Edit Comment")
  }

  // TODO: add delete button
  clickDeleteCommentHandler = () => {

  }

  render () {
    const comments = this.props.storedComments.map((comment) => {  
      let writter = this.props.storedUsers.find((user) => {
        return (user.id === comment.author_id)
      })
      let visibility = (this.state.user.id === comment.author_id) ? true : false
      // TODO: add edit and delet button if the user is the writter of comments.
      return (
        <div className = 'Comment' key = {comment.id}>
          <Comment 
            writter = {writter.name}
            content = {comment.content}/>
          {(visibility) && 
            <button 
            id = 'edit-comment-button'
            onClick = {() => this.clickEditCommentHandler()}>
            edit-comment
            </button>
          }
          {(visibility) && 
            <button 
            id = 'delete-comment-button'
            onClick = {() => this.clickDeleteCommentHandler()}>
            delete-comment
            </button>
          }
        </div>
      )
    })

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
                {/* TODO: check whether user is article author or not */}
                <button 
                    id = 'edit-article-button'
                    onClick = {() => this.clickEditArticleHandler(this.state.article_id)}>
                    edit-article
                </button>
                <button 
                    id = 'delete-article-button'
                    onClick = {() => this.clickDeleteArticleHandler()}>
                    delete-article
                </button>
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