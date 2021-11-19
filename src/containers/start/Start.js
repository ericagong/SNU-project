import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom';

class Start extends Component {

    clickLogoutHandler = (loginUser) => {
        console.log('[clickLogoutHandler]')
        this.props.onSetUser(loginUser)
        this.props.history.push('/login')
    }

    render () {
        return (
            <div className = 'Header'>
                {redirect}
                <button 
                    id = 'logout-button'
                    onClick = {() => this.clickLogoutHandler(loginUser)}>
                    log-out
                </button>
            </div>
        )
    }

}


export default withRouter(Start);