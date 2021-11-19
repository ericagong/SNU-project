import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Button from './../../Assets/Images/Button.png'

import './ChooserRole.css';

class ChooseRole extends Component {

    clickUserHandler = () => {
        this.props.history.push('/experience/user/phase0')
    }

    render () {
        return (
            <div className = 'ChooseRole'>
                <div className = 'RoleDescription'>
                    <div className = 'User'>
                        User
                    </div>
                    <div className = 'Suggester'>
                        Suggester
                    </div>
                </div>
                <button 
                    id = 'user-button'
                    onClick = {() => this.clickUserHandler()}>
                    Experience User
                </button>
                <img className="ButtonStyle" src={Button} alt={Button} onClick = {() => this.clickUserHandler()} />
                <div className="ButtonText" onClick = {() => this.clickUserHandler()}>Experience User</div>
            </div>
        )
    }
}


export default withRouter(ChooseRole);