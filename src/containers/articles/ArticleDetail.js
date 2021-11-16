import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Comment from '../../components/comment/Comment';
import * as actionTypes from '../../store/actions/ActionTypes';


class ArticleDetail extends Component {
  state = {
    user : {},
    article : {},
    article_id : 0,
    comments : [],
    content : '',
  }

  constructor(props) {
    super(props)
    this.state.user = this.props.storedUsers.find((user) => {
        return (user.logged_in === true)
    })
    this.state.article_id = parseInt(this.props.match.params.id)
    this.state.comments = this.props.storedComments
    this.state.article = this.props.storedArticles.find((article) => {
      return (article.id === this.state.article_id)
    })

    console.log("user :: " , this.state.user)
    console.log("article_id :: ", this.state.article_id)
    console.log("aricle :: ", this.state.article)
    console.log("comments :: ", this.state.comments)
}

  clickBackHandler = () => {
      this.props.history.push('/articles')
  }

  // TODO: only article author can move to edit page.
  clickEditArticleHandler = (article_id) => {
      this.props.history.push(`/articles/${article_id}/edit`)
  }

  // TODO: only article author can delete article.
  clickDeleteArticleHandler = () => {
      this.props.history.push('/articles')
  }

  // TODO: Add new article to DB
  clickConfirmHandler = () => {
      // TODO: change user to author_id
      // TODO: get proper article_id
      let newComment = {
          id : this.state.commnents.length + 1,
          article_id : this.state.article_id,
          author_id : this.state.user,
          content : this.state.content,
      }
      console.log(newComment)
  }

  // TODO: add edit button
  clickEditCommentHandler = () => {
      prompt("Edit Comment")
  }

  // TODO: add delete button
  clickDeleteCommentHandler = () => {

  }

  render () {
    
    const comments = this.state.comments.map((comment) => {
        // TODO: change author_id to author_name
        
        let writter = this.props.storedUsers.find((user) => {
          return (user.id === comment.author_id)
        })
        
        return (
            <Comment 
                key = {comment.id}
                writter = {writter.name}
                content = {comment.content}/>
        )
        // TODO: add edit and delet button if the user is the writter of comments.
    })

    return ( 
        <div className = 'ArticleDetail'>
            <button 
                id = 'back-detail-article-button'
                onClick = {() => this.clickBackHandler()}>
                back-detail-article
            </button>
            <div className = 'ArticleTab'>
                <p id = 'article-author'>{this.state.user}</p>
                <p id = 'article-title'>{this.state.title}</p>
                <p id = 'article-content'>{this.state.content}</p>
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
                    onChange = {(event) => this.setState( { title : event.target.value })}
                > 
                </textarea>
                <button 
                    id = 'confirm-create-comment-button'
                    onClick = {() => this.clickConfirmHandler()}>
                    confirm-create-comment
                </button>
                <button 
                    id = 'edit-comment-button'
                    onClick = {() => this.clickEditCommentHandler()}>
                    edit-comment
                </button>
                <button 
                    id = 'delete-comment-button'
                    onClick = {() => this.clickDeleteCommentHandler()}>
                    delete-comment
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
    onGetComments : () => {
      dispatch({ type : actionTypes.GET_COMMENTS })
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