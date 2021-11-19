import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class UserPhase0 extends Component {

    clickNextHandler = () => {
        this.props.history.push('/experience/user/phase1')
    }

    render () {
        return (
            <div className = 'UserPhase0'>
                    
                <button 
                    id = 'next-button'
                    onClick = {() => this.clickNextHandler()}>
                    Next
                </button>
            </div>
        )
    }

}


export default withRouter(UserPhase0);