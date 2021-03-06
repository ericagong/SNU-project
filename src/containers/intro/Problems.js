import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Button from './../../Assets/Images/Button.png'
// import Box from './../../Assets/Images/Box.png'

import './Problems.css';

class Probelms extends Component {

    clickNextHandler = () => {
        this.props.history.push('/intro/background')
    }

    render () {
        return (
            <div className = 'Problems'>
                <p className='ProblemTitle'>Problems</p>
                <div className = 'CurrentProblems'>
                    <p className = 'Situation'>
                        {/* 오늘날 인터넷 상에서 User는 다양한 Suggester에게 여러 정보를 얻을 수 있음. 하지만 Suggester가 제공하는 정보의 질은 보장받지 못함. */}
                        Today, on the Internet, users can get a lot of services from various Suggestors.
                        <br/>
                        However, the quality of the service Suggestor provides is not guaranteed.
                    </p>
                    <p className = 'Reason'>
                        {/* 이는 Suggester가 User에게 질낮은 정보를 제공하더라도 Suggester에게 직접적인 책임을 물을 수 있는 시스템이 구축되어 있지 않기 때문임.  */}
                        This is because there is currently no way to force information providers to give users high-quality information.
                        <br/>
                        In other words, the absence of a system to regulate information providers has created the current situation.
                    </p>
                    <p className = 'ViciousCycle'>
                        {/* 이러한 시스템이 구축되지 않는다면 Suggester는 정보의 질을 따지지 않고 공급할 것이고, 따라서 User는 수많은 정보 속에서 양질의 정보를 찾아 헤매는 악순환이 반복될 수 밖에 없음. */}
                        If there is no system to regulate information providers as it is now, the vicious cycle in which users are provided with low-quality information will inevitably be repeated.
                    </p>
                </div>      
                <img className = 'ButtonStyle' src = {Button} alt = {Button} onClick = {() => this.clickNextHandler()} />
                <div className = 'ButtonText' onClick = {() => this.clickNextHandler()}>Next</div>
            </div>
        )
    }

}


export default withRouter(Probelms);