import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import Button from './../../Assets/Images/Button.png'

import './Limitations.css'


class Limitations extends Component {

    clickNextHandler = () => {
        this.props.history.push('/end')
    }

    render () {
        return (
            <div className = 'Limitations'>
                <p className='LimitationsTitle'>Limitations</p>
                <div className = 'Limitation'>
                1. Users should have greater influence on transactions than suggesters. (like larger deposit or more population)
                The success of the Two Scored Earth search engine depends on how effectively the user punishes suggestor. 
                In reality, however, Suggester often has more money than User. 
                Because users and suggestors burn the same amount of money in punishment situation, users are more likely to go bankrupt first. 
                If users run out of their deposit first, suggesters do not have to change their acts. 
                Therefore, the project can only valid if the number of users is significantly higher than that of suggestor or if the deposit of users is larger enough than the deposit of suggesters.

                </div>      
                <img 
                    id = 'next-button'
                    src={Button} alt={Button} 
                    onClick = {() => this.clickNextHandler()}>
                </img>
                <div id = 'button-text'>Next</div>
            </div>
        )
    }

}


export default withRouter(Limitations);