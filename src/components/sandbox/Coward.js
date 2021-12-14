import React from 'react'

// import Character2 from './../../Assets/Images/character2.png'

// import './Coward.css'


const Coward = (props) => {
    return (
        <div className = 'Coward'>
            {(props.dead === false) && (props.punish === false) &&
                <img id = 'Coward-alive-reward-image' alt = 'Coward-alt' src = './'/>}
            {(props.dead === false) && (props.punish === true) &&
                <img id = 'Coward-alive-punish-image' alt = 'Coward-alt' src = './'/>}
            {(props.dead === true) && (props.punish === false) &&
                <img id = 'Coward-dead-reward-image' alt = 'Coward-alt' src = './'/>}
            {(props.dead === true) && (props.punish === true) &&
                <img id = 'Coward-dead-punish-image' alt = 'Coward-alt' src = './'/>}
            <div className = 'Deposit'>
                {props.deposit}
            </div>
        </div>
    )
}

export default Coward;