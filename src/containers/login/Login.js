import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// TODO: This is the only page that unauthorized users will have access to. Unauthorized users trying to access any other pages should be redirected to this page!

class Login extends Component {
    state = {
        email : '',
        password : '',
        login : false
    }

    loginHandler = () => {
        if(this.state.login === false) {
            if((this.state.email === 'swpp@snu.ac.kr') && (this.state.password === 'iluvswpp')) {
                this.setState({ login : true })
            }
            else {
                alert('Email or password is wrong')
            }
        }
    }

    render () {
        let redirect = null
        if(this.state.login === true) {
            redirect = <Redirect to = '/articles'/>
        }
        return (
            <div className = 'LoginPage'>
                {redirect}
                LoginPage
                <input 
                    id = 'email-input' 
                    type = 'text' 
                    placeholder = 'Email'
                    onChange = {(event) => this.setState( { email : event.target.value })}
                >
                </input>
                <input 
                    id = 'pw-input' 
                    type = 'text' 
                    placeholder = 'Password'
                    onChange = {(event) => this.setState( { password : event.target.value })}
                >
                </input>
                <button 
                    id = 'login-button'
                    onClick = {(event) => this.loginHandler()}>
                    log-in
                </button>
            </div>
        )
    }
}

export default Login;