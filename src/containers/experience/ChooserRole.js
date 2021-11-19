import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class ChooseRole extends Component {

    clickUserHandler = () => {
        this.props.history.push('/experience/user/phase0')
    }

    clickUserHandler = () => {
        this.props.history.push('/experience/suggester/phase0')
    }

    render () {
        return (
            <div className = 'ChooseRole'>
                <button 
                    id = 'user-button'
                    onClick = {() => this.clickUserHandler()}>
                    User
                </button>
                <button 
                    id = 'suggester-button'
                    onClick = {() => this.clickSuggesterHandler()}>
                    Suggester
                </button>
            </div>
        )
    }
}


export default withRouter(ChooseRole);