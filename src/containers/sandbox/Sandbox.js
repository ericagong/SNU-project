import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Sandbox extends Component {

    clickNextHandler = () => {
        this.props.history.push('/outro/limitations')
    }

    render () {
        return (
            <div className = 'Sandbox'>
                <div className = 'Simulation'>
                    샌드박스 모듈
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


export default withRouter(Sandbox);