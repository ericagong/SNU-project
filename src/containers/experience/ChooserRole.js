import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import LongButton from './../../Assets/Images/LongButton.png'

import './ChooserRole.css';

class ChooseRole extends Component {

    clickUserHandler = () => {
        this.props.history.push('/experience/user/phase0')
    }

    render () {
        return (
            <div className = 'ChooseRole'>
                <div className= 'ChooseRoleTitle' >Choose Role</div>
                <div className = 'RoleDescription'>
                    <div className = 'ChooseRoleUser'>
                        User
                    </div>
                    <div className = 'ChooseRoleSuggester'>
                        Suggester
                    </div>
                </div>
                {/* <button 
                    id = 'user-button'
                    onClick = {() => this.clickUserHandler()}>
                    Experience User
                </button> */}
                <img className="LongButtonStyle" src={LongButton} alt={LongButton} onClick = {() => this.clickUserHandler()} />
                <div className="ButtonText" onClick = {() => this.clickUserHandler()}>Experience User</div>
            </div>
        )
    }
}


export default withRouter(ChooseRole);