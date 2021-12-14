import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import LongButton from './../../Assets/Images/LongButton.png'

import './ChooserRole.css';

// TODO: 추가한 문구 위치 조정하기

class ChooseRole extends Component {

    clickUserHandler = () => {
        this.props.history.push('/experience/user/phase0')
    }

    render () {
        return (
            <div className = 'ChooseRole'>
                There are two roles in the Scored Earth project.
                <p className= 'ChooseRoleTitle' >Choose Role</p>
                <div className = 'RoleDescription'>
                    <div className = 'ChooseRoleUser'>
                        User
                    </div>
                    <div className = 'ChooseRoleSuggester'>
                        Suggester
                    </div>
                </div>                
                First, Experience as a User!
                <img className = 'LongButtonStyle' src = {LongButton} alt = {LongButton} onClick = {() => this.clickUserHandler()} />
                <div className = 'ButtonText' onClick = {() => this.clickUserHandler()}>Experience User</div>
            </div>
        )
    }
}


export default withRouter(ChooseRole);