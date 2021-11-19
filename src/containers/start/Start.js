import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

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
                </div>      
                <button 
                    id = 'next-button'
                    onClick = {() => this.clickNextHandler()}>
                    Next
                </button>
            </div>
        )
    }

}


export default withRouter(Start);