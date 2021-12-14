import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import './Footer.css'

class Footer extends Component {

    clickNextHandler = (button_id) => {
        switch(button_id) {
            case 0:
                this.props.history.push('/start')
                break
            case 1:
                this.props.history.push('/intro/problems')
                break
            case 2:
                this.props.history.push('/intro/background')
                break
            case 3:
                this.props.history.push('/intro/concept')
                break
            case 4:
                this.props.history.push('/experience/role')
                break
            case 5:
                this.props.history.push('/experience/user/phase0')
                break
            case 6:
                this.props.history.push('/experience/suggester/phase0')
                break
            case 7:
                this.props.history.push('/sandbox')
                break
            case 8:
                this.props.history.push('/outro/limitations')
                break
            case 9:
                this.props.history.push('/end')
                break
            default:
                return 
        }
        
    }

    render () {
        return (
            <div className = 'UserPhase0'>
                <p className = 'Buttons'>
                    <div 
                        className = 'button0'
                        id = 'goto-start-button'
                        onClick = {() => this.clickNextHandler(0)}>
                        {/* Start */}
                    </div>
                    <div 
                        className = 'button1'
                        id = 'goto-intro-problems-button'
                        onClick = {() => this.clickNextHandler(1)}>
                        {/* Intro-Problems */}
                    </div>
                    <div 
                        className = 'button2'
                        id = 'goto-intro-background-button'
                        onClick = {() => this.clickNextHandler(2)}>
                        {/* Intro-Background */}
                    </div>            
                    <div 
                        className = 'button3'
                        id = 'goto-intro-concept-button'
                        onClick = {() => this.clickNextHandler(3)}>
                        {/* Intro-Concept */}
                    </div>
                    <div 
                        className = 'button4'
                        id = 'goto-experience-role-button'
                        onClick = {() => this.clickNextHandler(4)}>
                        {/* Experience-Role */}
                    </div>
                    <div 
                        className = 'button5'
                        id = 'goto-experience-user-button'
                        onClick = {() => this.clickNextHandler(5)}>
                        {/* Experience-User */}
                    </div>
                    <div 
                        className = 'button6'
                        id = 'goto-experience-suggester-button'
                        onClick = {() => this.clickNextHandler(6)}>
                        {/* Experience-Suggester */}
                    </div>
                    <div 
                        className = 'button7'
                        id = 'goto-sandbox-button'
                        onClick = {() => this.clickNextHandler(7)}>
                        {/* Sandbox */}
                    </div>
                    <div 
                        className = 'button8'
                        id = 'goto-limitation-button'
                        onClick = {() => this.clickNextHandler(8)}>
                        {/* Limitations */}
                    </div>
                    <div 
                        className = 'button9'
                        id = 'goto-end-button'
                        onClick = {() => this.clickNextHandler(9)}>
                        {/* End */}
                    </div>
                </p>
            </div>
        )
    }

}


export default withRouter(Footer);