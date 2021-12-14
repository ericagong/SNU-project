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

        const depositGuideMsg = 'User와 거래하기 전, smart contract 채널에 예치할 금액을 선택해주세요.'
        const waitGuideMsg = `User가 거래를 원하는 Suggester를 선택할 때까지 기다려주세요.`
        const settingGuideMsg = `특정 User가 당신과 거래를 희망합니다.\n 거래를 위해서는 먼저 smart contract 채널을 설정하셔야합니다.\n
                                해당 User와 smart contract 채널을 형성하시려면 채널 승인 버튼을 눌러주세요.`
        const channelGuideMsg = '해당 User와의 채널이 아래와 같이 성공적으로 형성되었습니다.'
        
        let depositSelectMsg = ''

        if(this.state.suggesterDeposit !== 0) {
            depositSelectMsg = `${this.state.suggesterDeposit}만큼을 예치하고자합니다. 해당 deposit으로 채널을 형성하시려면 채널 형성 버튼을 눌러주세요.`
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
                    {/* <button 
                    id = 'next-button'
                    disabled = {(this.state.pickedSuggesterID === 0) || (this.state.deposit === 0)}
                    onClick = {() => this.clickSetChannelHandler()}>
                    Set-Channel
                    </button> */}
                    <img className="SuggesterPhaseButtonStyle" src={Button} alt={Button} disabled = {(this.state.pickedSuggesterID === 0) || (this.state.deposit === 0)} onClick = {() => this.clickSetChannelHandler()} />
                    <div className="SuggesterPhaseButtonText" src={Button} alt={Button} disabled = {(this.state.pickedSuggesterID === 0) || (this.state.deposit === 0)} onClick = {() => this.clickSetChannelHandler()}>Set-Channel</div>
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
                        <img id = 'user-image' alt = {Character5} src = {Character5} />
                        <div className = 'SettingGuide'>{settingGuideMsg}</div>
                        {/* <button 
                            id = 'setting-button'
                            onClick = {() => this.settingHandler()}>
                            set-channel
                        </button> */}                    
                    </div>
                    <img className="SuggesterPhaseButtonStyle" src={Button} alt={Button} onClick = {() => this.settingHandler()} />
                    <div className="SuggesterPhaseButtonText" src={Button} alt={Button} onClick = {() => this.settingHandler()}>set-channel</div>
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
                                final = "true"
                            />
                        </div>
                        {/* <img id = 'channel-image' alt = 'channel-alt' src = './'/> */}
                        <img id = 'channel-image' alt = {Channel} src = {Channel}/>
                        <div className = 'AfterSetting_User'>
                            <User
                                deposit = '500' 
                            />
                        </div>
                        <div className = 'channelGuideMsg'>{channelGuideMsg}</div>
                        {/* <button 
                            id = 'transfer-button'
                            onClick = {() => this.startTransferHandler()}>
                            start-transfer
                        </button> */}
                    </div>
                    <img className="SuggesterPhaseButtonStyle" src={Button} alt={Button} onClick = {() => this.startTransferHandler()} />
                    <div className="SuggesterPhaseButtonText" src={Button} alt={Button} onClick = {() => this.startTransferHandler()}>start-transfer</div>
                </div>
            }
            </div>
        )
    }

}


export default withRouter(SuggesterPhase0);