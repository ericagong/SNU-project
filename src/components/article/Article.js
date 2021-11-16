import React from 'react'

// article id, (full) article title, and author name.

const Article = (props) => {
    return (
        <div className = 'Article'>
            <div className = 'ArticleID'>
                {props.article_id}
            </div>
            <button 
                className = 'ArticleTitle'
                onClick = {props.clickTitle}>
                {props.article_title}
            </button>
            <div className = 'AuthorName'>
                {props.author_name}
            </div>
        </div>
    )
}

export default Article;