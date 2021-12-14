import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import LongButton from './../../Assets/Images/LongButton.png'

import User from '../../Assets/Images/character3.png'
import Suggester from '../../Assets/Images/character5.png'

import './ChooserRole.css';

// TODO: 추가한 문구 위치 조정하기

class ChooseRole extends Component {

    clickUserHandler = () => {
        this.props.history.push('/experience/user/phase0')
    }

    render () {
        return (
            <div className = 'ChooseRole'>
                <div className = 'TwoRoles'>
                    There are two roles in the Scored Earth project.
                </div>
                <p className= 'ChooseRoleTitle' >Choose Role</p>
                <div className = 'RoleDescription'>
                    <img className = 'UserImage' src = {User} alt = {User} />
                    <img className = 'SuggesterImage' src = {Suggester} alt = {Suggester} />
                    <div className = 'ChooseRoleUser'>
                        User
                    </div>
                    <div className = 'ChooseRoleSuggester'>
                        Suggester
                    </div>
                </div>           
                <div className = 'ExperienceAsUser'>     
                    First, Experience as a User!
                </div>
                <img className = 'LongButtonStyle' src = {LongButton} alt = {LongButton} onClick = {() => this.clickUserHandler()} />
                <div className = 'ButtonText' onClick = {() => this.clickUserHandler()}>Experience User</div>
            </div>
        )
    }
}


export default withRouter(ChooseRole);