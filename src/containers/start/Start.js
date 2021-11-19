import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Button from './../../Assets/Images/Button.png'
import Box from './../../Assets/Images/Box.png'

import './Start.css';

class Start extends Component {

    clickNextHandler = () => {
        this.props.history.push('/intro/problems')
    }

    render () {
        return (
            <div className = 'Start'>
                <div className = 'GameInfo'>
                    <p className = 'GameTitle'>
                        GameTitle
                    </p>
                    <p className = 'PlayTime'>
                        PlayTime
                    </p>
                    <p className = 'Creators'>
                        Name of Creators
                    </p>
                    <img className='BoxStyle' src={Box} alt={Box}/>
                </div>  

                {/* <img className="ButtonStyle" src={Button} alt={Button} /> */}
                {/* <button 
                    id = 'next-button'
                    onClick = {() => this.clickNextHandler()}>
                    Next 
                </button> */}
                
                <button type="button" onClick = {() => this.clickNextHandler()}>
                    <img className="ButtonStyle" src={Button} alt={Button} />
                        Next
                </button>

            </div>
        )
    }

}


export default withRouter(Start);