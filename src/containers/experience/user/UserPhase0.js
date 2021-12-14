import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import Suggester from '../../../components/experience/Suggester';
import User from '../../../components/experience/User';

import Button from '../../../Assets/Images/Button.png';
import Channel from '../../../Assets/Images/Channel.png'

// TODO: Set input size.

import './UserPhase0.css';


class UserPhase0 extends Component {
    state = {
        picked : false,
        pickedSuggesterID : 0,
        pickedSuggester : {},
        deposit : 0,
        loading : false,
        channel : false,
    }

    clickSuggesterHandler = (targetSuggester) => {
        this.setState({ pickedSuggester : targetSuggester, pickedSuggesterID : targetSuggester.id })
    }

    clickSetChannelHandler = () => {
        this.setState({ loading : true })
    }

    loadingHandler = () => {
        console.log('loadingHandler')
        setTimeout(() => {
            this.loadedHandler()
        }, 2000)
    }

    loadedHandler = () => {
        this.setState({ channel : true })
    }

    startTransferHandler = () => {
        if(this.state.pickedSuggester !== null && this.state.deposit !== null) {
            this.props.history.push(`/experience/user/phase1/${this.state.pickedSuggesterID}/${this.state.pickedSuggester.reputation}/${this.state.deposit}`)
        }
        else {
            alert('You can start transfer after Select Suggester and Set Deposit of User')
        }
    }

    render () {
        console.log('render')
        console.log('loading :: ', this.state.loading)
        console.log('channel :: ', this.state.channel)
        console.log('selectedSuggester :: ', this.state.pickedSuggester)
        console.log('selectedSuggester :: ', this.state.pickedSuggesterID)
        console.log('deposit :: ', this.state.deposit)

        let initialSuggetsers = [
            { id : 1, name : 'Suggester1', reputation : 50 },
            { id : 2, name : 'Suggester2', reputation : 100 },
            { id : 3, name : 'Suggester3', reputation : 80 },
        ]


        let suggesters = initialSuggetsers.map((suggester) => {
            let target = (this.state.pickedSuggesterID === suggester.id)
            return (
                <Suggester 
                    key = {suggester.id}
                    name = {suggester.name} 
                    reputation = {suggester.reputation}
                    final = 'false'
                    click = {() => this.clickSuggesterHandler(suggester)}
                    target = {target}
                />
            )
        })

        const suggesterGuideMsg = 'Please choose the Sugester you want to trade with.'
        const depositSetGuideMsg = `After receiving the image from the Sugester, you can choose your behavior whether Reward or Punish.\n
                                    If you decide to reward, Sugester's deposit increases by 500, and that of yours decreases by 500.\n
                                    If you decide to Punish, Sugester's deposit and your deposit will disappear by 500 respectively.\n
                                    Set the user deposit value between 500 to 1000 by concerning upon context.
                                    `
        const settingGuideMsg = 'If you want to start a transaction in the above state, please press the transaction start button below.'
        
        let suggesterSelectMsg = ''
        let depositGuideMsg = ''
        let depositSelectMsg = ''
        let loadingMsg = ''
        

        if(this.state.pickedSuggesterID !== 0) {
            suggesterSelectMsg = `You choose Suggester${this.state.pickedSuggesterID}!`
            depositGuideMsg = `Set User Deposit amount to offer Suggester${this.state.pickedSuggesterID} for setting channel.`
            if(this.state.deposit !== 0) depositSelectMsg = `Are you going to request Suggester${this.state.pickedSuggesterID} with [User Deposit: ${this.state.deposit}]?\n\n
            If so, Click start transfer button!`
            loadingMsg = `Please wait till you can get channel setting approval from Suggester${this.state.pickedSuggesterID}.`
        }
        
        
        return (
            <div className = 'UserPhase0'>
                <p className = 'UserPhaseTitle'>
                        UserPhase
                </p>
            {(this.state.loading === false) && 
                <div className = 'BeforeLoading'>
                    <div className = 'SuggesterGuide'>{suggesterGuideMsg}</div>
                    <div className = 'UserPhaseSuggesters'>
                        {suggesters}   
                    </div>
                    {(this.state.pickedSuggesterID !== 0) && 
                        <div className = 'PickedSuggesterDescription'>{suggesterSelectMsg}</div>}
                    {(this.state.pickedSuggesterID !== 0) &&
                        <div className = 'AfterSelect'> 
                            <div className = 'SetDeposit'>
                                <div className = 'DepositGuide'>{depositGuideMsg}</div>
                                <div className = 'depositSetGuideMsg'>{depositSetGuideMsg}</div>
                                <input 
                                    className = 'Deposit'
                                    type = 'number'
                                    min = '500'
                                    max = '1000'
                                    placeholder = 'Set Deposit $500 - $1000'
                                    onChange = {(event) => this.setState( { deposit : event.target.value })}
                                />
                                {(this.state.deposit !== 0) && 
                                    <div className = 'SelectedDepositDescription'>{depositSelectMsg}</div>
                                }
                            </div>
                            <img className = 'UserPhaseButtonStyle' src = {Button} alt = {Button} onClick = {() => this.clickSetChannelHandler()} />
                            <div className = 'UserPhaseButtonText' onClick = {() => this.clickSetChannelHandler()}>Set-Channel</div>
                        </div>
                    }
                </div>
            }
            {((this.state.loading === true) && (this.state.channel === false)) && 
                <div className = 'InLoading'>
                    <img id = 'loading-image' alt = 'loading-alt' src = './'/>
                    <div className = 'LoadingText'>Loading...</div>
                    <div className = 'LoadingGuide'>{loadingMsg}</div>
                    {this.loadingHandler()}
                </div>
            }
            {((this.state.loading === true) && (this.state.channel === true)) && 
                <div className = 'AfterLoading'>
                    <div className = 'SetChannel'>
                        {(this.state.pickedSuggester) &&
                            <div className = 'AfterLoading_Suggester'>
                                <Suggester 
                                    name = {this.state.pickedSuggester.name}
                                    reputation = {this.state.pickedSuggester.reputation}
                                    deposit = {this.state.deposit}
                                    final = 'true'
                                />
                            </div>
                        }
                        <img id = 'channel-image' alt = {Channel} src = {Channel}/>
                        <div className = 'AfterLoading_User'>
                            <User
                                deposit = {this.state.deposit}
                            />
                        </div>
                        <div className = 'AfterLoading_GuideMsg'>{settingGuideMsg}</div>
                        <img className = 'UserPhaseButtonStyle' src = {Button} alt = {Button} onClick = {() => this.startTransferHandler()} />
                        <div className = 'UserPhaseButtonText' onClick = {() => this.startTransferHandler()}>Start Transfer</div>
                    </div>
                </div>
            }
            
            </div>
        )
    }

}


export default withRouter(UserPhase0);