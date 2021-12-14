import React from 'react'

// import Character2 from './../../Assets/Images/character2.png'

// import './Tactful.css'


const Tactful = (props) => {
    return (
        <div className = 'Tactful'>
            {(props.dead === false) && (props.punish === false) &&
                <img id = 'Tactful-alive-reward-image' alt = 'Tactful-alt' src = './'/>}
            {(props.dead === false) && (props.punish === true) &&
                <img id = 'Tactful-alive-punish-image' alt = 'Tactful-alt' src = './'/>}
            {(props.dead === true) && (props.punish === false) &&
                <img id = 'Tactful-dead-reward-image' alt = 'Tactful-alt' src = './'/>}
            {(props.dead === true) && (props.punish === true) &&
                <img id = 'Tactful-dead-punish-image' alt = 'Tactful-alt' src = './'/>}
            <div className = 'Reputation'>
                {props.reputation}
            </div>
        </div>
    )
}

export default Tactful;