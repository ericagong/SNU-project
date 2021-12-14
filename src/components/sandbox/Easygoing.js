import React from 'react'

// import Character2 from './../../Assets/Images/character2.png'

// import './Easygoing.css'


const Easygoing = (props) => {
    return (
        <div className = 'Easygoing'>
            {(props.dead === false) && (props.punish === false) &&
                <img id = 'Easygoing-alive-reward-image' alt = 'Easygoing-alt' src = './'/>}
            {(props.dead === false) && (props.punish === true) &&
                <img id = 'Easygoing-alive-punish-image' alt = 'Easygoing-alt' src = './'/>}
            {(props.dead === true) && (props.punish === false) &&
                <img id = 'Easygoing-dead-reward-image' alt = 'Easygoing-alt' src = './'/>}
            {(props.dead === true) && (props.punish === true) &&
                <img id = 'Easygoing-dead-punish-image' alt = 'Easygoing-alt' src = './'/>}
            <div className = 'Reputation'>
                {props.reputation}
            </div>
        </div>
    )
}

export default Easygoing;