import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import Suggester from '../../../components/experience/Suggester';

class UserPhase0 extends Component {
    state = {
        picked : false,
        pickedSuggesterID : 0,
        deposit : 0,
        loading : false,
        channel : false,
    }

    clickSuggesterHandler = (targetSuggester) => {
        this.setState({ pickedSuggesterID : targetSuggester.id })
    }

    clickSetChannelHandler = () => {
        this.setState({ loading : true })
        // this.props.history.push('/experience/user/phase1')
    }


    loadingHandler = () => {
        this.setState({ channel : true })
    }

    render () {
        let initialSuggetsers = [
            { id : 1, name : 'Suggester1', reputation : 50 },
            { id : 2, name : 'Suggester2', reputation : 100 },
            { id : 3, name : 'Suggester3', reputation : 80 },
        ]

        let suggesters = initialSuggetsers.map((suggester) => {
            let target = (this.state.pickedSuggesterID === suggester.id)
            return (
                <Suggester 
                    name = {suggester.name} 
                    reputation = {suggester.reputation}
                    click = {() => this.clickSuggesterHandler(suggester)}
                    target = {target}
                />
            )
        })
        let suggesterGuideMsg = '거래 하고자 하는 Suggester를 골라주세요.'
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
            {(this.state.loading === false) && 
                <div className = 'BeforeLoading'>
                    <div className = 'SuggesterGuide'>{suggesterGuideMsg}</div>
                    <div className = 'Suggesters'>
                        {suggesters}   
                    </div>
                    {(this.state.pickedSuggesterID !== 0) && 
                        <div className = 'PickedSuggesterDescription'>{suggesterSelectMsg}</div>}
                    {(this.state.pickedSuggesterID !== 0) &&
                        <div className = 'AfterSelect'> 
                            <div className = 'SetDeposit'>
                                <div className = 'DepositGuide'>{depositGuideMsg}</div>
                                {/* TODO: change min max value */}
                                <input 
                                    className = 'Deposit'
                                    type = 'number'
                                    min = '0'
                                    max = '100'

                                />
                                {(this.state.deposit !== 0) && 
                                    <div className = 'SelectedDepositDescription'>{depositSelectMsg}</div>
                                }
                                
                            </div>
                            <button 
                            id = 'next-button'
                            disabled = {!(this.state.pickedSuggesterID === 0) && !(this.state.deposit === 0)}
                            onClick = {() => this.clickSetChannelHandler()}>
                            Set-Channel
                            </button>
                        </div>
                    }
                </div>
            }
            {((this.state.loading === true) && (this.state.channel === false)) && 
                <div className = 'InLoading'>
                    <div className = 'LoadingGuide'>{loadingMsg}</div>
                </div>
            }
            {((this.state.loading === true) && (this.state.channel === true)) && 
                <div className = 'AfterLoading'>
                </div>
            }
            </div>
        )
    }

}


export default withRouter(UserPhase0);