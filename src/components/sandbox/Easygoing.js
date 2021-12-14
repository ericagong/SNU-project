import React from 'react'

// import Character2 from './../../Assets/Images/character2.png'

// import './Easygoing.css'
import './SandboxComp.css'

const Easygoing = (props) => {
    return (
        <div className = 'Easygoing'>
            {(props.dead === false) &&
                <img id = 'Easygoing-alive-image' alt = 'Easygoing-alive-alt' src = './'/>}
            {(props.dead === true) &&
                <img id = 'Easygoing-dead-image' alt = 'Easygoing-dead-alt' src = './'/>}
            {/* TODO: delete             */}
            <img id = 'RiskTaker-dead-punish-image' alt = 'RiskTaker-alt' src = './'/>
            <div className = 'Deposit'>
                {props.deposit}
            </div>
        </div>
    )
}

export default Easygoing;