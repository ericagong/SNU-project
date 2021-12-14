import React from 'react'

// import Character2 from './../../Assets/Images/character2.png'
import sandbox_tactful from './../../Assets/Images/sandbox_tactful.png'
import sandbox_dead from './../../Assets/Images/sandbox_dead.png'

import './Tactful.css'


const Tactful = (props) => {
    return (
        <div className = 'Tactful'>
            {(props.dead === false) &&
                <img id = 'Tactful-alive-image' alt = {sandbox_tactful} src = {sandbox_tactful}/>}
            {(props.dead === true) &&
                <img id = 'Tactful-dead-image' alt = {sandbox_dead} src = {sandbox_dead}/>}
            <img id = 'Coward-dead-punish-image' alt = {sandbox_tactful} src = {sandbox_tactful}/>
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