import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Article from '../../components/article/Article';
import * as actionCreators from '../../store/actions/index';

class ArticleList extends Component {

  constructor(props) {
    super(props)
    this.props.onGetArticles()
  }

  componentDidMount() {
    this.props.onGetArticles()
  }

  clickCreateHandler = () => {
    this.props.history.push('/articles/create')
  }

  clickTitleHandler = (targetArticle) => {
    this.props.onGetArticle(targetArticle)  
    this.props.history.push(`/articles/${targetArticle.id}`)
  }

  render () {
    let redirect = null
    let loginUser = this.props.storedUsers.find((user) => (user.logged_in))
    if(!loginUser) redirect = <Redirect to ='/login'/>
    console.log('[render]')
    console.log('storedArticles', this.props.storedArticles)
    const articles = this.props.storedArticles.map((article) => {
      let author = this.props.storedUsers.find((user) => {
        return (user.id === article.author_id)
      })
      return (
          <div key = {article.id}>
            <Article 
                article_id = {article.id}
                article_title = {article.title}
                author_name = {(author) && author.name}
                clickTitle = {() => this.clickTitleHandler(article)}
            />
          </div>
      )
    })

    return ( 
        <div className = 'ArticleList'>
            {redirect}
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
      dispatch(actionCreators.getArticles())
    },
    onGetArticle : (targetArticle) => {
      dispatch(actionCreators.getArticle(targetArticle))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticleList));