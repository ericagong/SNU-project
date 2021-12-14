import React from 'react'

// import Character2 from './../../Assets/Images/character2.png'

// import './RiskTake.css'

const RiskTaker = (props) => {
    return (
        <div className = 'RiskTaker'>
            {(props.dead === false) && (props.punish === false) &&
                <img id = 'RiskTaker-alive-reward-image' alt = 'RiskTaker-alt' src = './'/>}
            {(props.dead === false) && (props.punish === true) &&
                <img id = 'RiskTaker-alive-punish-image' alt = 'RiskTaker-alt' src = './'/>}
            {(props.dead === true) && (props.punish === false) &&
                <img id = 'RiskTaker-dead-reward-image' alt = 'RiskTaker-alt' src = './'/>}
            {(props.dead === true) && (props.punish === true) &&
                <img id = 'RiskTaker-dead-punish-image' alt = 'RiskTaker-alt' src = './'/>}
            <img id = 'Coward-dead-punish-image' alt = 'Coward-alt' src = './'/>
            <div className = 'Deposit'>
                {props.deposit}
            </div>
            <div className = 'Connect'>
                Connect with Suggester{props.connect} 
            </div>
        </div>
    )
}

export default RiskTaker;