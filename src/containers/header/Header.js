import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

// TODO: The logout-button should not be displayed before the login.
class Header extends Component {
    state = {
        
    }

    clickLogoutHandler = () => {
        this.props.history.push('/login')
    }

    render () {
        return (
            <div className = 'Header'>
                <button 
                    id = 'logout-button'
                    onClick = {() => this.clickLogoutHandler()}>
                    log-out
                </button>
            </div>
        )
    }
}

export default withRouter(Header);