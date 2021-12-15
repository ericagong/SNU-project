import React from 'react'

// import Character2 from './../../Assets/Images/character2.png'
import sandbox_risktaker from './../../Assets/Images/sandbox_risktaker.png'
import sandbox_punished from './../../Assets/Images/sandbox_punished.png'
import sandbox_dead from './../../Assets/Images/sandbox_dead.png'

import './RiskTaker.css'

const RiskTaker = (props) => {
    return (
        <div className = 'RiskTaker'>
            {(props.dead === false) && (props.punish === false) &&
                <img id = 'RiskTaker-alive-reward-image' alt = {sandbox_risktaker} src = {sandbox_risktaker}/>}
            {(props.dead === false) && (props.punish === true) &&
                <img id = 'RiskTaker-alive-punish-image' alt = {sandbox_punished} src = {sandbox_punished}/>}
            {(props.dead === true) && (props.punish === false) &&
                <img id = 'RiskTaker-dead-reward-image' alt = {sandbox_dead} src = {sandbox_dead}/>}
            {(props.dead === true) && (props.punish === true) &&
                <img id = 'RiskTaker-dead-punish-image' alt = {sandbox_dead} src = {sandbox_dead}/>}
            <div className = 'RiskTaker_Deposit'>
                {props.deposit}
            </div>
            <div className = 'RiskTaker_Connect'>
            {(props.connect !== -1) && <div className = 'ConnectMsg'>Connect~ with Suggester{props.connect}</div> }
            </div>
        </div>
    )
}

export default RiskTaker;