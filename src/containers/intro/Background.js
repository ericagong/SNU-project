import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import './Background.css';
import Button from './../../Assets/Images/Button.png'

class Background extends Component {

    clickNextHandler = () => {
        this.props.history.push('/intro/concept')
    }

    render () {
        return (
            <div className = 'Background'>
                <p className='BackgroundTitle'>Background</p>
                <div className = 'ProjectBackground'>
                    <p className = 'StartingPoint'>
                        {/* 해당 문제를 Suggester와 User 사이 서로에게 영향을 끼칠 수 있는 채널을 만들어 해결하겠다는 발상이 "Two Of Two Scorched Earth" 프로젝트의 출발점임.  */}
                        In order to solve current situation, Two Of Two Scored Earth project suggests the idea of using Smart Contract to create channels that can affect each other. 
                    </p>
                    <p className = 'Hypothesis'>
                        {/* 프로젝트에서는 User의 보복적 행동을 가정함. 이는 user가 질 낮은 정보를 제공하는 Suggester에게 보복할 수 있는 기회가 있다면 그들이 기꺼이 할 것이라는 의미임. */}
                        The core premise of the scheme is a behavioral "resentment" assumption. 
                        <br/>
                        Briefly, if a buyer has the opportunity to punish a dishonest seller, even if it causes harm to themselves, they will PUNISH THEM.'
                    </p>
                    <p className = 'Purpose'>
                        {/* 이러한 가정 하에 프로젝트는 만약 suggester가 user에게 좋지 않은 정보를 제공했을 때 자신에게 보복할 수 있다는 것을 안다면 앞으로 양질의 정보만 제공하기 위해 노력할 것이라는 가설을 세우고 이를 입증코자함. */}
                        The purpose of Two Of Two Scored Earth project is proving that if the seller knows that they can be PUNISHED, they will be unlikely to provide a good or service they know to be subpar.
                    </p>
                    <p className = 'Technology'> 
                        {/* 이렇게 Suggester와 User가 서로 영향을 미칠 수 있는 채널은 Smart contract 기술에 의해 구현될 수 있음.  */}
                        The channel where Suggester and User interact can be developed by Smart contract.
                        <div className = 'TechnologyDescription'>
                            {/* 채널은 Oleg Andreev가 제안한 개념인 스마트 컨트랙트 기술(신뢰할 수 있는 중개자가 없는 상황에서도 두 객체가 거래할 수 있는 거래상황, 추가 정리 필요)에 기반하고 있음.   */}
                            Channel concept is based on Oleg Andreev's suggestions of how smart contract technology, transaction conditions in which two objects can be traded without reliable intermediaries, could affect socail media environment. 
                            <div id = 'smartcontract-ideas'onClick={() => window.open('https://ethresear.ch/t/list-of-primitives-useful-for-using-cryptoeconomics-driven-internet-social-media-applications/3198', '_blank')}>List of primitives useful for using cryptoeconomics-driven internet/ social media applications</div>
                            <div id = 'original-idea' onClick={() => window.open('https://blog.oleganza.com/post/58240549599/contracts-without-trust-and-third-parties', '_blank')}>Oleg Andreev's original idea</div>
                        </div>
                    </p>
                    <p className = 'Goal'>
                        {/* 우리는 여기서 User가 보복행위를 한다고 가정하고, User와 Suggester 사이에 서로 영향을 끼칠 수 있는 채널이 구축되면 이가 실제로 Suggester가 좋은 정보를 제공하기 위한 노력으로 이어지는지를 검증하고자 함.  */}
                        As a sub project of Two Of Two Scored Earth project, our Goal is to explain the basic mechanism of this and provide a simulation.
                        <br/>
                        You can tune the parameters and check results via sandbox mode.
                    </p>
                </div>      
                <img className = 'ButtonStyle' src = {Button} alt = {Button} onClick = {() => this.clickNextHandler()} />
                <div className = 'ButtonText' onClick = {() => this.clickNextHandler()}>Next</div>
            </div>
        )
    }

}


export default withRouter(Background);