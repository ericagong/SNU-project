import React from 'react'


const User = (props) => {
    return (
        <div className = 'User'>
            <img id = 'user-image' alt = 'user-alt' src = './'/> 
            <div className = 'deposit'>User Deposit : {props.deposit}</div>   
        </div>
    )
}

export default User;