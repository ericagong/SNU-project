import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';

class Header extends Component {

    componentDidMount() {
        console.log('[ComponentDidMount]')
        this.props.onGetUsers()
    }

    clickLogoutHandler = (loginUser) => {
        console.log('[clickLogoutHandler]')
        this.props.onSetUser(loginUser)
        this.props.history.push('/login')
    }

    render () {
        let redirect = null
        let loginUser = this.props.storedUsers.find((user) => (user.logged_in))
        if(!loginUser) redirect = <Redirect to ='/login'/>
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

const mapStateToProps = state => {
    return {
        storedUsers : state.userR.users,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUsers : () => {
            dispatch(actionCreators.getUsers())
        },
        onSetUser : (targetUser) => {
            dispatch(actionCreators.setUser(targetUser))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));