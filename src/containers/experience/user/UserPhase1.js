import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import Suggester from '../../../components/experience/Suggester';
import User from '../../../components/experience/User';

import Box from '../../../Assets/Images/Box.png'
import Button from '../../../Assets/Images/Button.png'
import LongButton from '../../../Assets/Images/LongButton.png'
import Channel from '../../../Assets/Images/Channel.png'

import './UserPhase1.css';

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
        if(behavior === 'Reward') this.setState({ satisfy : true, change : true, 
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
        
        let initialGuideMsg = `User want to tranfer with Suggester${this.state.suggesterID} with [User Deposit : ${this.state.userDeposit}]`
        let imageGuideMsg = 
            `Recieved Image from Suggester${this.state.suggesterID}!\n
            If you satisfy with the recived image, Click Reward.\n
            If so, Suggester${this.state.suggesterID} can get 500 by User from User Deposit : ${this.state.userDeposit}].\n
            Simulatenously, Reputation of Suggester${this.state.suggesterID} will increase by 1% of 500, which equals 5.\n
            If you don't satisfy with image, then click Punish.\n
            By clicking punish, User still have to sacrifice his/her deposit by 500, even though Suggester${this.state.suggesterID} cannot be able to get 500.\n
            Also Reputation of Suggester${this.state.suggesterID} will decrease by 1% of 500, which means 5.
            `

        let depositGuideMsg = 'Check changes on deposit of User and Suggester and reputation of Suggester!'

        let recurGuideMsg = 'This process repeats until withdraw occurs on the User or Sugester side OR either side goes bankrupt.'
        
        return (
            <div className = 'UserPhase1'>
                <p className = 'UserPhaseTitle'>
                        UserPhase
                </p>
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
                    <img id = 'imagebox' alt = {Box} src = {Box} />
                    <img className = 'RewardButtonStyle' src = {Button} alt = {Button} onClick = {() => this.clickSatisfyHandler('Reward')} />
                    <div className = 'RewardButtonText' onClick = {() => this.clickSatisfyHandler('Reward')}>Reward</div>
                    <img className = 'BurnButtonStyle' src = {Button} alt = {Button} onClick = {() => this.clickSatisfyHandler('Burn')} />
                    <div className = 'BurnButtonText' onClick = {() => this.clickSatisfyHandler('Burn')}>Punish</div>
                </div>
            }
            {(this.state.init === false) && (this.state.change === true) && 
                <div className = 'DepositChanged'>
                    <div className = 'DepositChanged_Content'>
                    
                    {(this.state.satisfy) && 
                    <div className = 'Reward'>
                        <div className = 'DepositChanged_Suggester'>
                            <Suggester 
                                id = {this.state.suggesterID}
                                deposit = {this.state.suggesterDeposit}
                                reputation = {this.state.suggesterRep}
                                final = 'true'
                            />
                        </div>
                        <img id = 'channel-reward-image' alt = {Channel} src = {Channel}/>
                        <div className = 'DepositChanged_User'>
                            <User
                                deposit = {this.state.userDeposit}
                            />
                        </div>
                    </div>
                    }   
                    {(!this.state.satisfy) && 
                    <div className = 'Burn'>
                        <div className = 'DepositChanged_Suggester'>
                            <Suggester 
                                id = {this.state.suggesterID}
                                deposit = {this.state.suggesterDeposit}
                                reputation = {this.state.suggesterRep}
                                final = 'true'
                            />
                        </div>
                        <img id = 'channel-reward-image' alt = {Channel} src = {Channel}/>
                        <div className = 'DepositChanged_User'>
                            <User deposit = {this.state.userDeposit}/>
                        </div>
                    </div>
                    }
                    </div>   
                    <div className = 'depositGuideMsg'>{depositGuideMsg}</div> 
                    <div className = 'recurGuideMsg'>{recurGuideMsg}</div>
                    <img className = 'ExperienceSuggesterButtonStyle' src = {LongButton} alt = {LongButton} onClick = {() => this.clickSatisfyHandler('Burn')} />
                    <div className = 'ExperienceSuggesterButtonText' onClick = {() => this.experienceSuggesterHandler()}>Experience Suggester</div>               
                </div>
            }
            
            </div>
        )
    }

}


export default withRouter(UserPhase1);