import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import Suggester from '../../../components/experience/Suggester';
import User from '../../../components/experience/User';

class UserPhase1 extends Component {
    state = {
        satisfy : false,
        change : false,
        deposit : 0,
        suggesterID : 0,
    }

    constructor(props) {
        super(props)
        this.state.deposit = parseInt(this.props.location.params.deposit)
        this.state.suggesterID = parseInt(this.props.location.params.id)
        console.log(this.state.deposit)
        console.log(this.state.suggesterID)
    }
    

    clickSatisfyHandler = (behavior) => {
        if(behavior === "Reward") this.setState({ satisfy : true, change : true })
        else this.setState({ satisfy : false, change : true })
    }

    startTransferHandler = () => {
        this.props.history.push('/experience/suggester/phase0')
    }

    render () {
        const initialState = {
            suggesterDeposit : 1000,
            userDeposit : 200,
        }

        let imageGuideMsg = '하단의 이미지에 만족하면 Reward를 불만족하면 Burn을 눌러주세요.'
        let depositGuideMsg = 'Deposit 변화를 확인하세요.'
        let recurGuideMsg = '해당 행위는 Withdraw가 일어날 때까지 반복됩니다.'
        
        return (
            <div className = 'UserPhase1'>
            {(this.state.change === false) && 
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
            {(this.state.change === true) && 
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