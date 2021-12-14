import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class TermiateCondition extends Component {

    clickNextHandler = () => {
        this.props.history.push('/sandbox')
    }

    render () {
        const condition1GuideMsg = 'If either User or Sugester does not respond.'
        const condition2GuideMsg = 'If either User or Sugester expresses their intention to suspend the transaction.'

        return (
            <div className = 'TermiateCondition'>
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
                <button 
                    id = 'next-button'
                    onClick = {() => this.clickNextHandler()}>
                    Next
                </button>
            </div>
        )
    }

}


export default withRouter(TermiateCondition);