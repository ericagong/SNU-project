import React from 'react'

const Comment = (props) => {
    return (
        <div className = 'Comment'>
            <div className = 'Writter'>
                {props.writter}
            </div>
            <div className = 'Content'>
                {props.content}
            </div>
        </div>
    )
}

export default Comment;