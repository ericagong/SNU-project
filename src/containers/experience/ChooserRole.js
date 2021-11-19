import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

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
            </div>
        )
    }
}


export default withRouter(ChooseRole);