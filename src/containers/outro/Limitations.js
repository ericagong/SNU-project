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
                    프로젝트 가정상의 한계들
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