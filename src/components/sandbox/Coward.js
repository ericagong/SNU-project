import React from 'react'

// import Character2 from './../../Assets/Images/character2.png'

// import './Coward.css'


const Coward = (props) => {
    return (
        <div className = 'Coward'>
            {(props.dead === false) &&
                <img id = 'Coward-alive-image' alt = 'Coward-alive-alt' src = './'/>}
            {(props.dead === true) &&
                <img id = 'Coward-dead-image' alt = 'Coward-dead-alt' src = './'/>}
            <div className = 'Reputation'>
                {props.reputation}
            </div>
        </div>
    )
}

export default Coward;