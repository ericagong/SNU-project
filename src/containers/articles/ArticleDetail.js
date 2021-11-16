import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import Comment from '../../components/comment/Comment';

class ArticleDetail extends Component {
    state = {
        article_id : 3,
        content : '',
        // TODO: get curr user based on reducer
        user : 'curr_user',
        // TODO: get all comments related to curr article by using axios
        commnents : [
            {
              "id": 1,
              "article_id": 0,
              "author_id": 2,
              "content": "What do you mean wow?"
            },
            {
              "id": 2,
              "article_id": 0,
              "author_id": 3,
              "content": "I was surprised"
            },
            {
              "id": 4,
              "article_id": 11,
              "author_id": 3,
              "content": "I agree with you"
            },
            {
              "id": 5,
              "article_id": 12,
              "author_id": 3,
              "content": "Haha this is funny"
            },
            {
              "id": 6,
              "article_id": 12,
              "author_id": 2,
              "content": "Yes, it is hilarious"
            },
            {
              "id": 7,
              "article_id": 13,
              "author_id": 1,
              "content": "I am sad"
            },
            {
              "id": 8,
              "article_id": 13,
              "author_id": 2,
              "content": "I do not want to see you sad"
            },
            {
              "id": 9,
              "article_id": 14,
              "author_id": 3,
              "content": "I do not want to work"
            },
            {
              "id": 10,
              "article_id": 15,
              "author_id": 3,
              "content": "What time is it?"
            },
            {
              "id": 11,
              "article_id": 15,
              "author_id": 2,
              "content": "It is 5 in the morning"
            },
            {
              "id": 12,
              "article_id": 16,
              "author_id": 1,
              "content": "I like it"
            },
            {
              "id": 13,
              "article_id": 17,
              "author_id": 1,
              "content": "I don't think so"
            },
            {
              "id": 14,
              "article_id": 17,
              "author_id": 2,
              "content": "Me neither"
            },
            {
              "id": 15,
              "article_id": 18,
              "author_id": 2,
              "content": "I am so stressed out"
            },
            {
              "id": 16,
              "article_id": 18,
              "author_id": 3,
              "content": "Stress is bad"
            },
            {
              "id": 17,
              "article_id": 18,
              "author_id": 2,
              "content": "Yeah, I should try to feel better"
            },
            {
              "id": 18,
              "article_id": 19,
              "author_id": 1,
              "content": "My dog is cute"
            },
            {
              "id": 19,
              "article_id": 19,
              "author_id": 2,
              "content": "I think so as well"
            },
            {
              "id": 20,
              "article_id": 20,
              "author_id": 3,
              "content": "Tornado has hit our town"
            },
            {
              "id": 21,
              "article_id": 20,
              "author_id": 1,
              "content": "Oh, what a misery"
            },
            {
              "author_id": 1,
              "article_id": 0,
              "content": "Wow!",
              "id": 22
            }
        ],
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
        const comments = this.state.commnents.map((comment) => {
            // TODO: change author_id to author_name
            return (
                <Comment 
                    key = {comment.id}
                    writter = {comment.author_id}
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

export default withRouter(ArticleDetail);