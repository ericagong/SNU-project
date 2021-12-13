import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import Suggester from '../../../components/experience/Suggester';
import User from '../../../components/experience/User';

import Button from '../../../Assets/Images/Button.png';


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
            alert('Suggester 중 한 명을 선택하고, user deposit을 설정하여야 거래를 시작할 수 있습니다.')
        }
    }

    render () {
        console.log("render")
        console.log("loading :: ", this.state.loading)
        console.log("channel :: ", this.state.channel)
        console.log("selectedSuggester :: ", this.state.pickedSuggester)
        console.log("selectedSuggester :: ", this.state.pickedSuggesterID)
        console.log("deposit :: ", this.state.deposit)

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
                    final = "false"
                    click = {() => this.clickSuggesterHandler(suggester)}
                    target = {target}
                />
            )
        })

        const suggesterGuideMsg = '거래 하고자 하는 Suggester를 골라주세요.'
        const depositSetGuideMsg = `Suggester가 제공한 사진을 받고 Reward 할 경우, Suggester의 예치금이 500 증가하고, 당신의 예치금이 500 감소합니다.\n
                                    Burn 할 경우, Suggester의 예치금과 당신의 예치금이 동시에 500 만큼 사라집니다. 따라서 500 이상 1000이하의 값으로 user Deposit을 설정해주세요.`
        const settingGuideMsg = '위 상태에서 거래를 시작하고자 하면 아래 거래시작 버튼을 눌러주세요.'
        
        let suggesterSelectMsg = ''
        let depositGuideMsg = ''
        let depositSelectMsg = ''
        let loadingMsg = ''
        

        if(this.state.pickedSuggesterID !== 0) {
            suggesterSelectMsg = `Suggester${this.state.pickedSuggesterID}를 선택하셨습니다.`
            depositGuideMsg = `Suggester${this.state.pickedSuggesterID}에게 채널 형성 시 제안할 Deposit을 설정해주세요.`
            if(this.state.deposit !== 0) depositSelectMsg = `Suggester${this.state.pickedSuggesterID}에게 ${this.state.deposit}의 Deposit으로 채널 형성을 제안하시겠습니까?`
            loadingMsg = `Suggester${this.state.pickedSuggesterID}에게 채널 승인이 올 때까지 기다려주세요.`
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
                            {/* <button 
                            id = 'next-button'
                            disabled = {(this.state.pickedSuggesterID === 0) || (this.state.deposit === 0)}
                            onClick = {() => this.clickSetChannelHandler()}>
                            Set-Channel
                            </button> */}
                            <img className="UserPhaseButtonStyle" src={Button} alt={Button} onClick = {() => this.clickSetChannelHandler()} />
                            <div className="UserPhaseButtonText" onClick = {() => this.clickSetChannelHandler()}>Set-Channel</div>
                        </div>
                    }
                </div>
            }
            {((this.state.loading === true) && (this.state.channel === false)) && 
                <div className = 'InLoading'>
                    <img id = 'loading-image' alt = 'loading-alt' src = './'/>
                    <div className = 'LoadingGuide'>{loadingMsg}</div>
                    {this.loadingHandler()}
                </div>
            }
            {((this.state.loading === true) && (this.state.channel === true)) && 
                <div className = 'AfterLoading'>
                    <div className = 'SetChannel'>
                        {(this.state.pickedSuggester) &&
                            <div className = 'Suggester'>
                                <Suggester 
                                    name = {this.state.pickedSuggester.name}
                                    reputation = {this.state.pickedSuggester.reputation}
                                    deposit = {this.state.deposit}
                                    final = "true"
                                />
                            </div>
                        }
                        <img id = 'channel-image' alt = 'channel-alt' src = './'/>
                        <div className = 'User'>
                            <User
                                deposit = {this.state.deposit}
                            />
                        </div>
<<<<<<< HEAD
                        {/* <button 
=======
                        {settingGuideMsg}
                        <button 
>>>>>>> e2e73234576fd1639ba113818386ce65ac92ea8a
                            id = 'transfer-button'
                            onClick = {() => this.startTransferHandler()}>
                            start transfer
                        </button> */}
                        <img className="UserPhaseButtonStyle" src={Button} alt={Button} onClick = {() => this.startTransferHandler()} />
                        <div className="UserPhaseButtonText" onClick = {() => this.startTransferHandler()}>Start Transfer</div>
                    </div>
                </div>
            }
            
            </div>
        )
    }

}


export default withRouter(UserPhase0);