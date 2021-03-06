import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Button from './../../Assets/Images/Button.png'
import Character4 from '../../Assets/Images/character4.png'
import Character5 from '../../Assets/Images/character5.png'

import './Start.css';

// TODO: Subtitle 위치 조정하기 

class Start extends Component {

    clickNextHandler = () => {
        this.props.history.push('/intro/problems')
    }

    render () {
        return (
            <div className = 'Start'>
                <div className = 'GameInfo'>
                    <p className = 'GameTitle'>
                        Scorched Earth
                    </p>
                    <p className = 'GameSubTitle'>
                        Decentralized Content Suggestions Using Two Of Two Scorched Earth.
                    </p>
                    <img className = 'Character4' src = {Character4} alt = {Character4} />
                    <img className = 'Character5' src = {Character5} alt = {Character5} />
                    <p className = 'PlayTime'>
                        PlayTime : 10 mins
                    </p>
                    <p className = 'Creators'>
                        Creators : Boseol Mun, Eunchae Gong, Woojin Cha
                    </p>
                </div>  
                <img className="ButtonStyle" src={Button} alt={Button} onClick = {() => this.clickNextHandler()} />
                <div className="ButtonText" onClick = {() => this.clickNextHandler()}>Next</div>
            </div>
        )
    }

}


export default withRouter(Start);