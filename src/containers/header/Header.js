import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/ActionTypes';

// TODO: The logout-button should not be displayed before the login.
class Header extends Component {
    state = {
        user : {},
        login : false,
    }

    constructor(props) {
        super(props)
        this.state.user = this.props.storedUsers.find((user) => {
            return (user.logged_in === true)
        })
        if(this.state.user) this.state.login = true

        console.log("user :: " , this.state.user)
        console.log("login :: ", this.state.login)
    }


    clickLogoutHandler = () => {
        this.props.onSetUser(this.state.user)
        this.props.history.push('/login')
    }

    render () {
        let redirect = null
        if(this.state.login === false) redirect = <Redirect to ='/login'/>
        return (
            <div className = 'Header'>
                {redirect}
                {(this.state.login) && <button 
                    id = 'logout-button'
                    onClick = {() => this.clickLogoutHandler()}>
                    log-out
                </button>}
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
        onSetUser : (targetUser) => {
            dispatch({ type : actionTypes.SET_USER, targetUser : targetUser})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));