import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/ActionTypes';

class ArticleEdit extends Component {
    state = {
        user : {},
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
        this.state.user = this.props.storedUsers.find((user) => {
            return (user.logged_in === true)
        })

        const selectedArticle = this.props.storedArticles.find((article) => {
            return (article.id === parseInt(this.props.match.params.id))
        })

        // console.log("selectedArticle" , selectedArticle)

        this.props.onGetArticle(selectedArticle)
        // console.log("SSA", this.props.storedSelectedArticle)

        this.state.article = this.props.storedSelectedArticle
        
        this.state.title = this.state.article.title
        this.state.content = this.state.article.content
        
        this.state.original_title = this.state.article.title
        this.state.original_content = this.state.article.content

        console.log('[Constructor]')
        console.log("user :: " , this.state.user)
        console.log("article :: ", this.state.article)
        console.log("title :: ", this.state.title)
        console.log("content :: ", this.state.content)
    }

    // TODO: If the title and contents have not been modified yet but are the same as the title and contents before editing, just go back to the detail page without any alert.
    // TODO: Are you sure? The change will be lost.
    clickBackHandler = () => {
        if((this.state.original_title !== this.state.title) 
            || (this.state.original_content !== this.state.content)){
                let output = window.confirm('Are you sure? The change will be lost.')
                if(output === false) return
                else this.props.history.push('/articles')
            }
        else this.props.history.push('/articles')
    }

    clickConfirmHandler = () => {
        this.props.onEditArticle(this.state.article, this.state.title, this.state.content)
        const modified = this.props.storedArticles.find((article) => {
            return (article.id === this.state.article.id)
        })
        this.setState({ article : modified})
        this.props.history.push(`/articles/${this.state.article.id}`)
    }

    clickPreviewHandler = () => {
        this.setState({ tab : "Preview"})
    }

    clickWriteHandler = () => {
        this.setState({ tab : "Write"})
    }

    render () {
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
                    <p id = 'article-author'>{this.state.user.name}</p>
                    <p id = 'article-title'>{this.state.title}</p>
                    <p id = 'article-content'>{this.state.content}</p>
                </div>
            )
        }

        return ( 
            <div className = 'ArticleEdit'>
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
                    onClick = {() => this.clickConfirmHandler()}>
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
            dispatch({ type : actionTypes.EDIT_ARTICLE, targetArticle : targetArticle, editTitle : editTitle, editContent : editContent })
        },
        onGetArticle : (targetArticle) => {
            dispatch( { type : actionTypes.GET_ARTICLE, targetArticle : targetArticle })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticleEdit));