import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

// TODO: The logout-button should not be displayed before the login.
class Header extends Component {
    state = {
        logout: false
    }

    clickLogoutHandler = () => {
        this.setState({ logout : true })
    }

    render () {
        let redirect = null
        if(this.state.logout) redirect = <Redirect to = '/login'/>
        return (
            <div className = 'Header'>
                {redirect}
                <button 
                    id = 'logout-button'
                    onClick = {() => this.clickLogoutHandler()}>
                    log-out
                </button>
            </div>
        )
    }
}

export default Header;