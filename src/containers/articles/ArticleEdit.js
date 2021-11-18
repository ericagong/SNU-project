import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';

class ArticleEdit extends Component {
    state = {
        // user : {},
        article : {},
        title : '',
        content : '',
        original_title : '',
        original_content : '',
        tab : "Write",
        confirm : false,
    }

    constructor(props) {
        super(props)

        const selectedArticle = this.props.storedArticles.find((article) => {
            return (article.id === parseInt(this.props.match.params.id))
        })

        this.props.onGetArticle(selectedArticle)
        
        
        this.state.title = selectedArticle.title
        this.state.original_title = selectedArticle.title
        this.state.content = selectedArticle.content
        this.state.original_content = selectedArticle.content

        console.log('[Constructor]')
        console.log("article :: ", selectedArticle)
        console.log("title :: ", this.state.title)
        console.log("content :: ", this.state.content)
    }

    
    clickBackHandler = () => {
        if((this.state.original_title !== this.state.title) 
            || (this.state.original_content !== this.state.content)){
                let output = window.confirm('Are you sure? The change will be lost.')
                if(output === false) return
                else this.props.history.push('/articles')
            }
        else this.props.history.push('/articles')
    }

    clickConfirmHandler = (targetArticle) => {
        this.props.onEditArticle(targetArticle, this.state.title, this.state.content)
        const modified = this.props.storedArticles.find((article) => {
            return (article.id === targetArticle.id)
        })
        this.setState({ article : modified })
        this.props.history.push(`/articles/${targetArticle.id}`)
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

        let targetArticle = this.props.storedSelectedArticle

        let currTab = null
        if(this.state.tab === "Write") {
            currTab = (
                <div className = 'WriteTab'>
                    <input 
                        id = 'article-title-input' 
                        type = 'text' 
                        placeholder = 'Title'
                        value = {this.state.title}
                        onChange = {(event) => this.setState( { title : event.target.value })}
                    >
                    </input>
                    <textarea
                        id = 'article-content-input' 
                        type = 'text' 
                        row = '10'
                        placeholder = 'Content'
                        value = {this.state.content}
                        onChange = {(event) => this.setState( { content : event.target.value })}
                    >
                    </textarea>
                </div>
            )
        }
        else if(this.state.tab === "Preview") {
            currTab = (
                <div className = 'PreviewTab'>
                    <p id = 'article-author'>{loginUser.name}</p>
                    <p id = 'article-title'>{this.state.title}</p>
                    <p id = 'article-content'>{this.state.content}</p>
                </div>
            )
        }

        return ( 
            <div className = 'ArticleEdit'>
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
                    id = 'back-edit-article-button'
                    onClick = {() => this.clickBackHandler()}>
                    back-edit-article
                </button>
                <button 
                    id = 'confirm-edit-article-button'
                    disabled = {!this.state.title || !this.state.content}
                    onClick = {() => this.clickConfirmHandler(targetArticle)}>
                    confirm-edit-article
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        storedUsers : state.userR.users,
        storedArticles : state.articleR.articles,
        storedSelectedArticle : state.articleR.selectedArticle,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEditArticle : (targetArticle, editTitle, editContent ) => {
            dispatch(actionCreators.editArticle(targetArticle, editTitle, editContent))
            // dispatch({ type : actionTypes.EDIT_ARTICLE, targetArticle : targetArticle, editTitle : editTitle, editContent : editContent })
        },
        onGetArticle : (targetArticle) => {
            dispatch(actionCreators.getArticle(targetArticle))
            // dispatch( { type : actionTypes.GET_ARTICLE, targetArticle : targetArticle })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticleEdit));