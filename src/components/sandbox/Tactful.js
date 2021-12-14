import React from 'react'

// import Character2 from './../../Assets/Images/character2.png'

import './Tactful.css'


const Tactful = (props) => {
    return (
        <div className = 'Tactful'>
            {(props.dead === false) &&
                <img id = 'Tactful-alive-image' alt = 'Tactful-alive-alt' src = './'/>}
            {(props.dead === true) &&
                <img id = 'Tactful-dead-image' alt = 'Tactful-dead-alt' src = './'/>}
            <img id = 'Coward-dead-punish-image' alt = 'Coward-alt' src = './'/>
            <div className = 'Tactful_Deposit'>
                {props.deposit}
            </div>
            <div className = 'Tactful_ID'>
                Suggester{props.id} 
            </div>
        </div>
    )
}

export default Tactful;