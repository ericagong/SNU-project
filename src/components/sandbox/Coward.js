import React from 'react'

// import Character2 from './../../Assets/Images/character2.png'
import sandbox_coward from './../../Assets/Images/sandbox_coward.png'
import sandbox_punished from './../../Assets/Images/sandbox_punished.png'
import sandbox_dead from './../../Assets/Images/sandbox_dead.png'

import './Coward.css'

const Coward = (props) => {
    return (
        <div className = 'Coward'>
            {(props.dead === false) && (props.punish === false) &&
                <img id = 'Coward-alive-reward-image' alt = {sandbox_coward} src = {sandbox_coward}/>}
            {(props.dead === false) && (props.punish === true) &&
                <img id = 'Coward-alive-punish-image' alt = {sandbox_punished} src = {sandbox_punished}/>}
            {(props.dead === true) && (props.punish === false) &&
                <img id = 'Coward-dead-reward-image' alt = {sandbox_dead} src = {sandbox_dead}/>}
            {(props.dead === true) && (props.punish === true) &&
                <img id = 'Coward-dead-punish-image' alt = {sandbox_dead} src = {sandbox_dead}/>}
            <img id = 'Coward-dead-punish-image' alt = {sandbox_coward} src = {sandbox_coward}/>
            <div className = 'Coward_Deposit'>
                {props.deposit}
            </div>
            <div className = 'Coward_Connect'>
                {(props.connect !== -1) && <div className = 'ConnectMsg'>Connect with Suggester{props.connect}</div> }
            </div>
        </div>
    )
}

export default Coward;