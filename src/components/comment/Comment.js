import React from 'react'

const Comment = (props) => {
    return (
        <div className = 'Comment'>
            <div className = 'Writter'>
                {props.writter}
            </div>
            <p className = 'Content'>
                {props.content}
            </p>
        </div>
    )
}

export default Comment;