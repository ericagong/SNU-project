import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import Suggester from '../../../components/experience/Suggester';
import User from '../../../components/experience/User';

import Box from '../../../Assets/Images/Box.png'
import Button from '../../../Assets/Images/Button.png'
import ImageGood from '../../../Assets/Images/ImageGood.png'
import ImageBad from '../../../Assets/Images/ImageBad.png'

import './SuggesterPhase1.css'

class SuggesterPhase1 extends Component {
    state = {
        init : true,
        select : false,
        send : false,
        selectedImg : '',
        deposit : 500,
        userDeposit : 1000,
        suggesterDeposit : 1000,
        suggesterRep : 80,
        satisfy : false,
    }

    constructor(props) {
        super(props)
        this.state.suggesterDeposit = parseInt(this.props.deposit)
    }
    

    initState = () => {
        setTimeout(() => {
            this.setState({init : false})
        }, 4000)
    }


    clickImgHandler = (img) => {
        if(img === 'Good') {
            this.setState({ selectedImg : 'Good', select : true}) 
        }
        else {
            this.setState({ selectedImg : 'Bad', select : true})    
        }
    }

    clickSendHandler = () => {
        if(this.state.selectedImg === null) {
            alert('You have to choose what kind of image to send.')
        }
        else {
            if(this.state.selectedImg === 'Good') {
                alert('You sent a good image to the user.')
                this.setState({
                    suggesterDepoit : this.state.suggesterDeposit + this.state.deposit,
                    userDeposit : this.state.userDeposit - this.state.deposit,
                    suggesterRep : this.state.suggesterRep + (this.state.deposit * 0.01),
                    satisfy : true,
                    send : true,
                })
            }
            else {
                alert('You sent a bad image to the user.')
                this.setState({ 
                    suggesterDepoit : this.state.suggesterDeposit - this.state.deposit,
                    userDeposit : this.state.userDeposit - this.state.deposit,
                    suggesterRep : this.state.suggesterRep - (this.state.deposit * 0.01),
                    satisfy : false,
                    send : true,
                })
            }
        }
    }


    clickNextHandler = () => {
        this.props.history.push(`/experience/termination/conditions`)
    }

    render () {
        if(this.state.init === true) this.initState()
        
        let initialGuideMsg = 
            `User with [User Deposit: 1000] wants to make a deal with you.\n
            Now, amount of money to burn and reward are same as ${this.state.deposit}.`
        let imageGuideMsg = 
            `Select an image you want to send to User.\n
            If User satisfies with the recived image, you can get 500 by User from User Deposit : 1000].\n
            Simulatenously, your Reputation will increase by 1% of 500, which equals 5.\n
            If User doesn't satisfy with image, User havs to sacrifice his/her deposit by 500, also your deposit will be deducted by 500.\n
            Also your Reputation of will decrease by 1% of 500, which means 5.
            `
        let depositGuideMsg = 'Check changes on deposit of User and Suggester and reputation of Suggester!'
        let recurGuideMsg = 'This process repeats until withdraw occurs on the User or Sugester side OR either side goes bankrupt.'
        let selectGuideMsg = `You choose to sen ${this.state.selectedImg} to user. If you want to send, Click send button.`

        return (
            <div className = 'SuggesterPhase1'>
                <p className = 'SuggesterPhaseTitle'>
                    SuggesterPhase
                </p>
            {(this.state.init === true) && 
                <div className = 'InitialState'>
                    <div className = 'InitMessage'>
                        {initialGuideMsg}
                    </div>
                </div>
            }
            {(this.state.init === false) && (this.state.send === false) && 
                <div className = 'BeforeSelect'>
                    <div className = 'ImageGuide'>{imageGuideMsg}</div>
                    <img className = 'GoodImage' alt = {Box} src = {ImageGood} />
                    <button 
                        id = 'good-img-button'
                        onClick = {() => this.clickImgHandler('Good')}>
                        Good Image
                    </button>
                    <img className = 'BadImage' alt = {Box} src = {ImageBad} />
                    <button 
                        id = 'bad-img-button'
                        onClick = {() => this.clickImgHandler('Bad')}>
                        Bad Image
                    </button>
                    {(this.state.select === true) && 
                        <div className = 'SelectGuide'>{selectGuideMsg}</div>}
                    <img className = 'UserPhaseButtonStyle' src = {Button} alt = {Button} onClick = {() => this.clickSendHandler()} />
                    <div className = 'UserPhaseButtonText' onClick = {() => this.clickSendHandler()}>Send</div>
                </div>
            }
            {(this.state.init === false) && (this.state.select === true) && (this.state.send === true) &&
                <div className = 'DepositChanged'>
                    <div className = 'DepositGuideMsg'>{depositGuideMsg}</div>
                    {(this.state.satisfy) && 
                    <div className = 'Reward'>
                        <div className = 'DepositChanged_Suggester'>
                            <Suggester 
                                id = '1'
                                deposit = {this.state.suggesterDeposit}
                                reputation = {this.state.suggesterRep}
                                final = 'true'
                            />
                        </div>
                        <img id = 'channel-reward-image' alt = 'channel-reward-alt' src = './'/>
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
                        <img id = 'channel-reward-image' alt = 'channel-reward-alt' src = './'/>
                        <div className = 'DepositChanged_User'>
                            <User deposit = {this.state.userDeposit}/>
                        </div>
                    </div>
                    }
                    <div className = 'recurGuideMsg'>{recurGuideMsg}</div>
                    <img className = 'UserPhaseButtonStyle' src = {Button} alt = {Button} onClick = {() => this.clickNextHandler()} />
                    <div className = 'UserPhaseButtonText' onClick = {() => this.clickNextHandler()}>Next</div>
                    
                </div>
            }
            </div>
        )
    }

}


export default withRouter(SuggesterPhase1);