import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// import * as actionTypes from '../../store/actions/ActionTypes';
import * as actionCreators from '../../store/actions/index';

class ArticleCreate extends Component {
    state = {
        title : '',
        content : '',
        tab : "Write",
    }

    // constructor(props) {
    //     super(props)
    //     this.state.user = this.props.storedUsers.find((user) => {
    //         return (user.logged_in === true)
    //     })
    //     // TODO: change with axios
    //     this.state.id = this.props.storedArticles.length + 1
        
    //     console.log('[Constructor]')
    //     console.log("user :: " , this.state.user)
    //     console.log("article_id :: ", this.state.id)
    // }

    clickBackHandler = () => {
        this.props.history.push('/articles')
    }

    clickConfirmHandler = (loginUser, newArticleID) => {
        console.log('[clickConfirmHandler]')
        console.log('newArticleID :: ' , newArticleID)
        console.log('loginUserID :: ' , loginUser)
        console.log('title :: ' , this.state.title)
        console.log('content :: ' , this.state.content)
        this.props.onCreateArticle(newArticleID, loginUser.id, this.state.title, this.state.content)
        this.props.history.push(`/articles/${newArticleID}`)
    }

    clickPreviewHandler = () => {
        this.setState({ tab : "Preview"})
    }

    clickWriteHandler = () => {
        this.setState({ tab : "Write"})
    }

    render () {
        let redirect = null
        let loginUser = this.props.storedUsers.find((user) => (user.logged_in))
        if(!loginUser) redirect = <Redirect to ='/login'/>
        let articleNum = this.props.storedArticles.length
        let newArticleID = this.props.storedArticles[articleNum-1].id + 1
        let currTab = null
        if(this.state.tab === "Write") {
            currTab = (
                <div className = 'WriteTab'>
                    <input 
                        id = 'article-title-input' 
                        type = 'text' 
                        placeholder = 'Title'
                        value = {this.state.title}
                        onChange = {(event) => this.setState( { title : event.target.value })}>
                    </input>
                    <textarea
                        id = 'article-content-input' 
                        type = 'text' 
                        placeholder = 'Content'
                        value = {this.state.content}
                        onChange = {(event) => this.setState( { content : event.target.value })}>
                    </textarea>
                </div>
            )
        }
        else if(this.state.tab === "Preview") {
            currTab = (
                <div className = 'PreviewTab'>
                    {loginUser && <p id = 'article-author'>{loginUser.name}</p>}
                    <p id = 'article-title'>{this.state.title}</p>
                    <p id = 'article-content'>{this.state.content}</p>
                </div>
            )
        }

        return ( 
            <div className = 'ArticleCreate'>
                {redirect}
                <button 
                    id = 'preview-tab-button'
                    onClick = {() => this.clickPreviewHandler()}>
                    preview-tab
                </button>
                <button 
                    id = 'write-tab-button'
                    onClick = {() => this.clickWriteHandler()}>
                    write-tab
                </button>
                {currTab}
                <button 
                    id = 'back-create-article-button'
                    onClick = {() => this.clickBackHandler()}>
                    back-create-article
                </button>
                <button 
                    id = 'confirm-create-article-button'
                    disabled = {!this.state.title || !this.state.content}
                    onClick = {() => this.clickConfirmHandler(loginUser, newArticleID)}>
                    confirm-create-article
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        storedUsers : state.userR.users,
        storedArticles : state.articleR.articles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateArticle : (id, author_id, title, content) => {
            dispatch(actionCreators.createArticle({ id : id, author_id : author_id, title : title, content : content}))
            // dispatch({ type : actionTypes.CREATE_ARTICLE, author_id : author_id, title : title, content : content })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticleCreate));