import React from 'react'

// import Character2 from './../../Assets/Images/character2.png'
import sandbox_easygoing from './../../Assets/Images/sandbox_easygoing.png'
import sandbox_dead from './../../Assets/Images/sandbox_dead.png'

import './Easygoing.css'

const Easygoing = (props) => {
    return (
        <div className = 'Easygoing'>
            {(props.dead === false) &&
                <img id = 'Easygoing-alive-image' alt = {sandbox_easygoing} src = {sandbox_easygoing}/>}
            {(props.dead === true) &&
                <img id = 'Easygoing-dead-image' alt = {sandbox_dead} src = {sandbox_dead}/>}
            <img id = 'Coward-dead-punish-image' alt = {sandbox_easygoing} src = {sandbox_easygoing}/>
            <div className = 'Easygoing_Deposit'>
                {props.deposit}
            </div>
            <div className = 'Easygoing_ID'>
                Suggester{props.id} 
            </div>
        </div>
    )
}

export default Easygoing;