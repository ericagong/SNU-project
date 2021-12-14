import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import Suggester from '../../../components/experience/Suggester';
import User from '../../../components/experience/User';

import Button from '../../../Assets/Images/Button.png'
import Character5 from '../../../Assets/Images/character5.png'
import Channel from '../../../Assets/Images/Channel.png'

import './SuggesterPhase0.css'

class SuggesterPhase0 extends Component {
    state = {
        suggesterDeposit : 0,
        loading : false,
        channel : false,
        final : false,
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

    settingHandler = () => {
        this.setState({ final : true })
    }

    startTransferHandler = () => {
        this.props.history.push(`/experience/suggester/phase1/${this.state.suggesterDeposit}`)
    }

    render () {

        const depositGuideMsg = 'Before trading with User, please select the amount to deposit in the smart contract channel.'
        const waitGuideMsg = `Please wait for the user to select the Sugester they want to trade with.`
        const settingGuideMsg = `A specific user wants to make a deal with you.\n 
                                For transactions, you must first set up a smart contract channel.\n
                                Press the channel approval button to form a smart contact channel with the user.`
        const channelGuideMsg = 'Channel with the user was successfully formed as follows.'
        
        let depositSelectMsg = ''

        if(this.state.suggesterDeposit !== 0) {
            depositSelectMsg = `Are you going to deposit [Suggester Deposit: ${this.state.suggesterDeposit}]?\n
            Press the channel formation button to form a channel with the corresponding deposit.`
        }
        
        return (
            <div className = 'SuggesterPhase0'>
                <p className = 'SuggesterPhaseTitle'>
                SuggesterPhase
                </p>
            {(this.state.loading === false) && 
                <div className = 'SetDeposit'>
                    <div className = 'DepositGuide'>{depositGuideMsg}</div>       
                    <input 
                        className = 'Deposit'
                        type = 'number'
                        min = '500'
                        max = '1000'
                        placeholder = 'Set Deposit $500 - $1000'
                        onChange = {(event) => this.setState( { suggesterDeposit : event.target.value })}
                    />
                    {(this.state.deposit !== 0) && 
                        <div className = 'SelectedDepositDescription'>{depositSelectMsg}</div>
                    }        
                    <img className = 'SuggesterPhaseButtonStyle' src = {Button} alt = {Button} disabled = {(this.state.pickedSuggesterID === 0) || (this.state.deposit === 0)} onClick = {() => this.clickSetChannelHandler()} />
                    <div className = 'SuggesterPhaseButtonText' src = {Button} alt = {Button} disabled = {(this.state.pickedSuggesterID === 0) || (this.state.deposit === 0)} onClick = {() => this.clickSetChannelHandler()}>Set-Channel</div>
                </div>
            }
            {((this.state.loading === true) && (this.state.channel === false)) && 
                <div className = 'WaitUser'>
                    {/* <img id = 'loading-image' alt = 'loading-alt' src = './'/> */}
                    <div className = 'LoadingText'>Loading...</div>
                    <div className = 'LoadingGuide'>{waitGuideMsg}</div>
                    {this.loadingHandler()}
                </div>
            }
            {((this.state.loading === true) && (this.state.channel === true)) && (this.state.final === false) &&
                <div>
                    <div className = 'SetChannel'>
                        {/* <img id = 'setting-image' alt = 'setting-alt' src = './'/> */}
                        <img id = 'setting-user-image' alt = {Character5} src = {Character5} />
                        <div className = 'SettingGuide'>{settingGuideMsg}</div>
                    </div>
                    <img className = 'SuggesterPhaseButtonStyle' src={Button} alt={Button} onClick = {() => this.settingHandler()} />
                    <div className = 'SuggesterPhaseButtonText' src={Button} alt={Button} onClick = {() => this.settingHandler()}>set-channel</div>
                </div>
            }
            {((this.state.loading === true) && (this.state.channel === true)) && (this.state.final === true) &&
                <div className = 'AfterSetting'>
                    <div className = 'SetChannel'>
                        <div className = 'AfterSetting_Suggester'>
                            <Suggester 
                                name = '1'
                                reputation = '80'
                                deposit = {this.state.suggesterDeposit}
                                final = 'true'
                            />
                        </div>
                        <img id = 'channel-image' alt = {Channel} src = {Channel}/>
                        <div className = 'AfterSetting_User'>
                            <User
                                deposit = '500' 
                            />
                        </div>
                        <div className = 'channelGuideMsg'>{channelGuideMsg}</div>
                    </div>
                    <img className = 'SuggesterPhaseButtonStyle' src = {Button} alt = {Button} onClick = {() => this.startTransferHandler()} />
                    <div className = 'SuggesterPhaseButtonText' src = {Button} alt = {Button} onClick = {() => this.startTransferHandler()}>start-transfer</div>
                </div>
            } 
            </div>
        )
    }

}


export default withRouter(SuggesterPhase0);