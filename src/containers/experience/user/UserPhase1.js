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
        }, 4000)
    }


    clickSatisfyHandler = (behavior) => {
        if(behavior === "Reward") this.setState({ satisfy : true, change : true, 
            suggesterDepoit : this.state.suggesterDeposit + this.state.deposit,
            userDeposit : this.state.userDeposit - this.state.deposit,
            suggesterRep : this.state.suggesterRep + (this.state.deposit * 0.01),
        })
        else this.setState({ satisfy : false, change : true , 
            suggesterDepoit : this.state.suggesterDeposit - this.state.deposit,
            userDeposit : this.state.userDeposit - this.state.deposit,
            suggesterRep : this.state.suggesterRep - (this.state.deposit * 0.01),
        })
    }


    experienceSuggesterHandler = () => {
        this.props.history.push(`/experience/suggester/phase0`)
    }

    render () {
        

        if(this.state.init === true) this.initState()
        
        let initialGuideMsg = `User가 [Deposit : ${this.state.userDeposit}] 예치 후, Suggester${this.state.suggesterID}와 거래를 희망합니다.\n
            이 때, 거래의 reward나 burn에 사용되는 금액은 ${this.state.deposit}으로 동일합니다.`
        let imageGuideMsg = `Suggester${this.state.suggesterID}로부터 이미지가 도착하였습니다. 하단의 이미지에 만족 시 Reward를, 불만족 시 Burn을 눌러주세요.\n
            Reward를 누르는 경우, [User Deposit : ${this.state.userDeposit}]에서 500이 Suggester${this.state.suggesterID}에게 지급됩니다.\n
            동시에 500의 1%인 5만큼 Suggester${this.state.suggesterID}의 reputation에 긍정적인 점수가 매겨집니다.\n
            Burn을 누르는 경우, Suggester${this.state.suggesterID}에게 500이 지급되지 않으나, User는 500의 금액을 태우는 희생을 해야합니다.\n
            동시에 500의 1%인 5만큼 Suggester${this.state.suggesterID}의 reputation에 부정적인 점수가 매겨집니다.
            `
        let depositGuideMsg = 'Suggester와 User의 Deposit과 Suggester의 Reputation 변화를 확인하세요.'
        let recurGuideMsg = '이러한 행위는 User나 Suggester 측에서 Withdraw가 일어나거나 양측 중 한 쪽이 파산할 때까지 반복됩니다.'
        
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
                    <img id = 'suggester-image' alt = 'suggester-alt' src = './'/>
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
                    {depositGuideMsg}
                    {(this.state.satisfy) && 
                    <div className = 'Reward'>
                        <div className = 'Suggester'>
                            <Suggester 
                                id = {this.state.suggesterID}
                                deposit = {this.state.suggesterDeposit}
                                reputation = {this.state.suggesterRep}
                                final = "true"
                            />
                        </div>
                        <img id = 'channel-reward-image' alt = 'channel-reward-alt' src = './'/>
                        <div className = 'User'>
                            <User
                                deposit = {this.state.userDeposit}
                            />
                        </div>
                    </div>
                    }   
                    {(!this.state.satisfy) && 
                    <div className = 'Burn'>
                        <div className = 'Suggester'>
                            <Suggester 
                                id = {this.state.suggesterID}
                                deposit = {this.state.suggesterDeposit}
                                reputation = {this.state.suggesterRep}
                                final = "true"
                            />
                        </div>
                        <img id = 'channel-reward-image' alt = 'channel-reward-alt' src = './'/>
                        <div className = 'User'>
                            <User deposit = {this.state.userDeposit}/>
                        </div>
                    </div>
                    }
                    {recurGuideMsg}
                    <button 
                            id = 'experience-suggester-button'
                            onClick = {() => this.experienceSuggesterHandler()}>
                            Experience Suggester
                    </button>
                </div>
            }
            </div>
        )
    }

}


export default withRouter(UserPhase1);