import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class ArticleEdit extends Component {
    state = {
        title : '',
        content : '',
        tab : "Write",
        // TODO: get curr user based on reducer
        user : 'curr_user',
        confirm : false,
        article_id : 3,
    }

    // TODO: If the title and contents have not been modified yet but are the same as the title and contents before editing, just go back to the detail page without any alert.
    // TODO: Are you sure? The change will be lost.
    clickBackHandler = () => {
        this.props.history.push('/articles')
    }

    // TODO: Add new article to DB
    clickConfirmHandler = (article_id) => {
        // TODO: change user to author_id
        let modifiedArticle = {
            id : this.state.title,
            author_id : this.state.user,
            title : this.state.title,
            content : this.state.content,
        }
        console.log(modifiedArticle)
        this.props.history.push(`/articles/${article_id}`)
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
                    onChange = {(event) => this.setState( { title : event.target.value })}
                    >
                    </input>
                    <textarea
                        id = 'article-content-input' 
                        type = 'text' 
                        row = '10'
                        placeholder = 'Content'
                        onChange = {(event) => this.setState( { content : event.target.value })}
                    >
                    </textarea>
                </div>
            )
        }
        else if(this.state.tab === "Preview") {
            // TODO: put article properties 
            currTab = (
                <div className = 'PreviewTab'>
                    <p id = 'article-author'>{this.state.user}</p>
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
                    onClick = {() => this.clickConfirmHandler(this.state.article_id)}>
                    confirm-edit-article
                </button>
            </div>
        )
    }
}

export default withRouter(ArticleEdit);