import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Article from '../../components/article/Article';

class ArticleList extends Component {
  state = {
    user : {},  
    articles : [],
  }

  constructor(props) {
    super(props)
    this.state.user = this.props.storedUsers.find((user) => {
        return (user.logged_in === true)
    })
    this.state.articles = this.props.storedArticles
  }


  clickCreateHandler = () => {
      this.props.history.push('/articles/create')
  }

  clickTitleHandler = (article_id) => {
      this.props.history.push(`/articles/${article_id}`)
  }

  render () {
    console.log(this.state.user)
    const articles = this.state.articles.map((article) => {
        return (
            <Article 
                key = {article.id}
                article_id = {article.id}
                article_title = {article.title}
                author_name = {article.author_id}
                clickTitle = {() => this.clickTitleHandler(article.id)}
            />
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

export default connect(mapStateToProps, null)(withRouter(ArticleList));