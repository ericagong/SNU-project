import React from 'react'

// import Character2 from './../../Assets/Images/character2.png'

// import './Tactful.css'


const Tactful = (props) => {
    return (
        <div className = 'Tactful'>
            {(props.dead === false) &&
                <img id = 'Tactful-alive-image' alt = 'Tactful-alive-alt' src = './'/>}
            {(props.dead === true) &&
                <img id = 'Tactful-dead-image' alt = 'Tactful-dead-alt' src = './'/>}
            <div className = 'Deposit'>
                {props.deposit}
            </div>
        </div>
    )
}

export default Tactful;