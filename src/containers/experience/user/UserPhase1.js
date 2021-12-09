import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import Suggester from '../../../components/experience/Suggester';
import User from '../../../components/experience/User';

class UserPhase1 extends Component {
    state = {
        init : true,
        satisfy : false,
        change : false,
        deposit : 500,
        suggesterDeposit : 1000,
        userDeposit : 1000,
        suggesterID : 0,
        suggesterRep : 0,
    }

    constructor(props) {
        super(props)
        this.state.suggesterRep = parseInt(this.props.reputation)
        this.state.suggesterID = parseInt(this.props.id)
        this.state.userDeposit = parseInt(this.props.deposit)
    }
    

    initState = () => {
        setTimeout(() => {
            this.setState({init : false})
        }, 2000)
    }


    clickSatisfyHandler = (behavior) => {
        if(behavior === "Reward") this.setState({ satisfy : true, change : true, 
            suggesterDepoit : this.state.suggesterDeposit + this.state.deposit,
            userDeposit : this.state.userDeposit - this.state.deposit,
        })
        else this.setState({ satisfy : false, change : true , 
            suggesterDepoit : this.state.suggesterDeposit - this.state.deposit,
            userDeposit : this.state.userDeposit - this.state.deposit,
        })
    }

    render () {
        

        if(this.state.init === true) this.initState()
        
        let initialGuideMsg = `User가 [Deposit : ${this.state.userDeposit}] 예치 후, Suggester${this.state.suggesterID}와 거래를 희망합니다.\n
            이 때, 거래의 reward나 burn에 사용되는 금액은 ${this.state.deposit}으로 동일합니다.`
        let imageGuideMsg = '하단의 이미지에 만족하면 Reward를 불만족하면 Burn을 눌러주세요.'
        let depositGuideMsg = 'Deposit 변화를 확인하세요.'
        let recurGuideMsg = '해당 행위는 Withdraw가 일어날 때까지 반복됩니다.'
        
        return (
            <div className = 'UserPhase1'>
            {(this.state.init === true) && 
                <div className = 'InitialState'>
                    <div className = 'InitMessage'>
                        {initialGuideMsg}
                    </div>
                </div>
            }
            {(this.state.init === false) && (this.state.change === false) && 
                <div className = 'BeforeChange'>
                    <div className = 'ImageGuide'>{imageGuideMsg}</div>
                    <img id = 'suggester-image' alt = 'suggester-image-alt' src = './'/>
                    <button 
                        id = 'reward-button'
                        onClick = {() => this.clickSatisfyHandler("Reward")}>
                        Reward
                    </button>
                    <button 
                        id = 'burn-button'
                        onClick = {() => this.clickSatisfyHandler("Burn")}>
                        Burn
                    </button>
                </div>
            }
            {(this.state.init === false) && (this.state.change === true) && 
                <div className = 'DepositChanged'>
                    {(this.state.satisfy) && 
                    <div className = 'Reward'>
                        <div className = 'Suggester'>
                            <Suggester 
                                deposit = {this.state.deposit}
                                final = "true"
                            />
                        </div>
                        <img id = 'channel-reward-image' alt = 'channel-reward-image-alt' src = './'/>
                        <div className = 'User'>
                            <User
                                deposit = {this.state.deposit}
                            />
                        </div>
                    </div>
                    }   
                    {(!this.state.satisfy) && 
                    <div className = 'Burn'>
                        <div className = 'Suggester'>
                            <Suggester 
                                id = {this.state.suggesterID}
                                deposit = {this.state.deposit}
                                final = "true"
                            />
                        </div>
                        <img id = 'channel-reward-image' alt = 'channel-reward-image-alt' src = './'/>
                        <div className = 'User'>
                            <User deposit = {this.state.deposit}/>
                        </div>
                    </div>
                    }
                </div>
            }
            </div>
        )
    }

}


export default withRouter(UserPhase1);