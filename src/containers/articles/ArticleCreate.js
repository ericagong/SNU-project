import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/ActionTypes';

class ArticleCreate extends Component {
    state = {
        user : {},
        title : '',
        content : '',
        tab : "Write",
    }

    constructor(props) {
        super(props)
        this.state.user = this.props.storedUsers.find((user) => {
            return (user.logged_in === true)
        })
    }

    clickBackHandler = () => {
        this.props.history.push('/articles')
    }

    clickConfirmHandler = () => {
        this.props.onStoreArticle(this.state.user, this.state.title, this.state.content)
        this.props.history.push(`/articles/${this.props.storedSelectedArticle.id}`)
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
                        onChange = {(event) => this.setState( { title : event.target.value })}>
                    </input>
                    <textarea
                        id = 'article-content-input' 
                        type = 'text' 
                        row = '10'
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

const mapDispatchToProps = dispatch => {
    return {
        onStoreArticle : (title, content) => {
            dispatch({ type : actionTypes.CREATE_ARTICLE, title : title, content : content })
        }
    }
}

const mapStateToProps = state => {
    return {
        storedUsers : state.userR.users,
        storedSelectedArticle : state.articleR.selectedArticle
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticleCreate));