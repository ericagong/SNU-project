import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import Article from '../../components/article/Article';

class ArticlePreview extends Component {
    state = {
        title : '',
        content : '',
        tab : "Write",
        user : 'curr_user',
        confirm : false,
    }

    clickBackHandler = () => {
        this.props.history.push('/articles')
    }

    // TODO: Add new article to DB
    clickConfirmHandler = () => {
        // TODO: change user to author_id
        console.log("confirm")
        let newArticle = {
            id : this.state.title,
            author_id : this.state.user,
            title : this.state.title,
            content : this.state.content,
        }
        console.log(newArticle)
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
                    <input 
                        id = 'article-content-input' 
                        type = 'text' 
                        row = '10'
                        placeholder = 'Content'
                        onChange = {(event) => this.setState( { content : event.target.value })}
                    >
                    </input>
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
            <div className = 'ArticleCreate'>
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
                    onClick = {() => this.clickConfirmHandler()}>
                    confirm-create-article
                </button>
            </div>
        )
    }
}

export default withRouter(ArticlePreview);