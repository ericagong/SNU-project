import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Article from '../../components/article/Article';
import * as actionTypes from '../../store/actions/ActionTypes';

class ArticleList extends Component {
  state = {
    user : {},  
    // articles : [],
  }

  constructor(props) {
    super(props)
    this.state.user = this.props.storedUsers.find((user) => {
        return (user.logged_in === true)
    })
    console.log('[Constructor]')
    console.log('user ::', this.state.user)
    // this.state.articles = this.props.storedArticles
  }

  componentDidMount() {
    this.props.onGetArticles()
  }

  clickCreateHandler = () => {
    this.props.history.push('/articles/create')
  }

  clickTitleHandler = (article) => {
    this.props.onGetArticle(article)  
    this.props.history.push(`/articles/${article.id}`)
  }

  render () {
    const articles = this.props.storedArticles.map((article) => {
      let author = this.props.storedUsers.find((user) => {
        return (user.id === article.author_id)
      })
      return (
          <div key = {article.id}>
            <Article 
                article_id = {article.id}
                article_title = {article.title}
                author_name = {author.name}
                clickTitle = {() => this.clickTitleHandler(article)}
            />
          </div>
      )
    })

    return ( 
        <div className = 'ArticleList'>
            {articles}
            <button 
                id = 'create-article-button'
                onClick = {() => this.clickCreateHandler()}>
                create-article
            </button>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    storedUsers : state.userR.users,
    storedArticles : state.articleR.articles,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetArticles : () => {
      dispatch({ type : actionTypes.GET_ARTICLES})
    },
    onGetArticle : (targetArticle) => {
      dispatch({ type: actionTypes.GET_ARTICLE, targetArticle : targetArticle})
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticleList));