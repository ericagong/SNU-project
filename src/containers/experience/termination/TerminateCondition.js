import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import Button from '../../../Assets/Images/Button.png'
import Terminate1 from '../../../Assets/Images/Terminate1.png'
import Terminate2 from '../../../Assets/Images/Terminate2.png'

import './TerminateCondition.css'

class TermiateCondition extends Component {

    clickNextHandler = () => {
        this.props.history.push('/sandbox')
    }

    render () {
        const condition1GuideMsg = 'If either User or Sugester does not respond.'
        const condition2GuideMsg = 'If either User or Sugester expresses their intention to suspend the transaction.'

        return (
            <div className = 'TermiateCondition'>
                <p className='TerminateConditionTitle'>Terminate Condition</p>
                <div className = 'TerminateCondition1'>
                    {/* <img id = 'terminate-condition-1-image' alt = 'condition-alt' src = './'/> */}
                    <img className = 'TerminateImage1' alt = {Terminate1} src = {Terminate1} />
                    <p className = 'TerminateExplain1'>
                        {condition2GuideMsg}
                    </p>
                </div>  
                <div className = 'TerminateCondition2'>
                    {/* <img id = 'terminate-condition-1-image' alt = 'condition-alt' src = './'/> */}
                    <img className = 'TerminateImage2' alt = {Terminate2} src = {Terminate2} />
                    <p className = 'TerminateExplain2'>
                        {condition1GuideMsg}
                    </p>
                </div>      
                {/* <button 
                    id = 'next-button'
                    onClick = {() => this.clickNextHandler()}>
                    Next
                </button> */}
                <img className="ButtonStyle" src={Button} alt={Button} onClick = {() => this.clickNextHandler()} />
                <div className="ButtonText" onClick = {() => this.clickNextHandler()}>Next</div>
                
            </div>
        )
    }

}


export default withRouter(TermiateCondition);