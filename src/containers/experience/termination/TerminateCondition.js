import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import Button from '../../../Assets/Images/Button.png'

import './TerminateCondition.css'

class TermiateCondition extends Component {

    clickNextHandler = () => {
        this.props.history.push('/sandbox')
    }

    render () {
        const condition1GuideMsg = 'User나 Suggester 중 한 측이 응답이 없는 경우'
        const condition2GuideMsg = 'User나 Suggester 중 한 측이 거래 중단 의사를 밝힌 경우'

        return (
            <div className = 'TermiateCondition'>
                <p className='TerminateConditionTitle'>Terminate Condition</p>
                <div className = 'TerminateCondition1'>
                    <img id = 'terminate-condition-1-image' alt = 'condition-alt' src = './'/>
                    <p className = 'TerminateExplain'>
                        {condition1GuideMsg}
                        좀 더 설명 쓰기
                    </p>
                </div>  
                <div className = 'TerminateCondition2'>
                    <img id = 'terminate-condition-1-image' alt = 'condition-alt' src = './'/>
                    <p className = 'TerminateExplain'>
                        {condition2GuideMsg}
                        좀 더 설명 쓰기
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