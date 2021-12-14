import React from 'react'

import Character5 from './../../Assets/Images/character5.png'

import './User.css'


const User = (props) => {
    return (
        <div className = 'User'>
            <img id = 'user-image' alt = {Character5} src = {Character5}/> 
            <div className = 'deposit'>User <br/>Deposit : {props.deposit}</div>   
        </div>
    )
}

export default User;