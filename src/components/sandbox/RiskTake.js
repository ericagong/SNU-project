import React from 'react'

// import Character2 from './../../Assets/Images/character2.png'

// import './RiskTake.css'


const RiskTake = (props) => {
    return (
        <div className = 'RiskTake'>
            {(props.dead === false) &&
                <img id = 'RiskTake-alive-image' alt = 'RiskTake-alive-alt' src = './'/>}
            {(props.dead === true) &&
                <img id = 'RiskTake-dead-image' alt = 'RiskTake-dead-alt' src = './'/>}
            <div className = 'Reputation'>
                {props.reputation}
            </div>
        </div>
    )
}

export default RiskTake;