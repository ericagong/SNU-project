import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Button from './../../Assets/Images/Button.png'
// import Box from './../../Assets/Images/Box.png'

import './Concept.css';

class Concept extends Component {

    clickNextHandler = () => {
        this.props.history.push('/experience/role')
    }

    render () {
        return (
            <div className = 'Concept'>
                <div className = 'Roles'>
                    <p className = 'RoleExplain'>
                        - 시스템에 참여하는 참가자는 두 역할 중 하나를 맡는다.
                        - User:  사진 정보를 고르는 역할을 하는 User
                        - Suggester: 사진들을 제공하는 역할인 Suggester
                    </p>
                </div>  
                <div className = 'Process'>
                    <p className = 'ProcessExplain'>
                        1. 각 Suggester는 main-chain에 escrow 형태로 일정양의 금액을 사전에 예치해둔다.
                        2. User도 거래를 위해 일정 금액을 사전 예치해 둔다.
                        3. User는 아무것도 모르는 상황에서 여러 Suggester 중 하나를 선택하며, Suggester에게 채널 승인 요구가 간다.
                        4. Suggester는 채널 승인을 허가한다. (이는 주로 자동으로 처리됨)
                        5. Smart contract 기술로 main-chain에서 Suggester의 예치금 중 일부를 사용하여 해당 User와의 1:1 거래 채널이 형성된다.
                        6. Suggester가 User에게 정보를 제공한다. 
                        7. User가 channel에 해당 정보에 대한 만족/불만족 여부를 알린다.
                        8. channel은 해당 정보를 기반으로 user와 suggester의 예치금을 조정한다.
                            - State1: user가 사진에 만족한 경우, User는 reward 양만큼 Suggester에게 지불한다
                            - State 2: user가 불만족한 경우, user와 suggester모두 사전에 지정한 양만큼의 예치금을 태운다.
                        9. 위 과정이 지속적으로 반복된다.
                    </p>
                </div>      
                {/* <button 
                    id = 'next-button'
                    onClick = {() => this.clickNextHandler()}>
                    Next
                </button> */}
                <img className="ButtonStyle" src={Button} alt={Button} onClick = {() => this.clickNextHandler()} />
                <div className="ButtonText">Next</div>
            </div>
        )
    }

}


export default withRouter(Concept);