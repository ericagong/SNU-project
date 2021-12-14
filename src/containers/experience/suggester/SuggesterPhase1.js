import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import Suggester from '../../../components/experience/Suggester';
import User from '../../../components/experience/User';

class SuggesterPhase1 extends Component {
    state = {
        init : true,
        select : false,
        send : false,
        selectedImg : "",
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
        if(img === "Good") {
            this.setState({ selectedImg : "Good", select : true}) 
        }
        else {
            this.setState({ selectedImg : "Bad", select : true})    
        }
    }

    clickSendHandler = () => {
        if(this.state.selectedImg === null) {
            alert('어떤 종류의 이미지를 보낼지 선택하셔야합니다.')
        }
        else {
            if(this.state.selectedImg === "Good") {
                alert('Good image를 user에게 보냈습니다.')
                this.setState({
                    suggesterDepoit : this.state.suggesterDeposit + this.state.deposit,
                    userDeposit : this.state.userDeposit - this.state.deposit,
                    suggesterRep : this.state.suggesterRep + (this.state.deposit * 0.01),
                    satisfy : true,
                    send : true,
                })
            }
            else {
                alert('Bad image를 user에게 보냈습니다.')
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
        
        let initialGuideMsg = `형성된 채널에 User가 [Deposit : 1000] 예치 후, 당신과 거래를 희망합니다.\n
            이 때, 거래의 reward나 burn에 사용되는 금액은 ${this.state.deposit}으로 동일합니다.`
        let imageGuideMsg = `User에게 제공할 이미지를 선택하세요.\n 유저가 당신이 보낸 이미지에 만족할 경우, ${this.state.deposit}만큼 당신에게 지급됩니다.\n
            동시에 500의 1%인 5만큼 당신의 reputation에 긍정적인 점수가 매겨집니다.\n
            유저가 당신이 보낸 이미지에 불만족하는 경우, 당신이 채널에 예치해 둔 ${this.state.suggesterDeposit}에서 ${this.state.deposit}만큼이 차감됩니다.\n 맞나?
            동시에 500의 1%인 5만큼 당신의 reputation에 부정적인 점수가 매겨집니다.
            `
        let depositGuideMsg = 'Suggester와 User의 Deposit과 Suggester의 Reputation 변화를 확인하세요.'
        let recurGuideMsg = '이러한 행위는 Suggester나 User 측에서 Withdraw가 일어나거나 양측 중 한 쪽이 파산할 때까지 반복됩니다.'
        let selectGuideMsg = `User에게 ${this.state.selectedImg} image를 보내기로 선택하셨습니다. 보내시려면 send 버튼을 클릭해주세요.`

        return (
            <div className = 'SuggesterPhase1'>
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
                    {/* img로 바꾸기 */}
                    <button 
                        id = 'good-img-button'
                        onClick = {() => this.clickImgHandler("Good")}>
                        Good Image
                    </button>
                    <button 
                        id = 'bad-img-button'
                        onClick = {() => this.clickImgHandler("Bad")}>
                        Bad Image
                    </button>
                    {(this.state.select === true) && 
                        <div className = 'SelectGuide'>{selectGuideMsg}</div>}
                    <button 
                        id = 'send-button'
                        onClick = {() => this.clickSendHandler()}>
                        Send
                    </button>
                </div>
            }
            {(this.state.init === false) && (this.state.select === true) && (this.state.send === true) &&
                <div className = 'DepositChanged'>
                    {depositGuideMsg}
                    {(this.state.satisfy) && 
                    <div className = 'Reward'>
                        <div className = 'Suggester'>
                            <Suggester 
                                id = '1'
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
                            onClick = {() => this.clickNextHandler()}>
                            Next
                    </button>
                </div>
            }
            </div>
        )
    }

}


export default withRouter(SuggesterPhase1);