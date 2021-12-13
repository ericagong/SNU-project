import React from 'react'

import Character2 from './../../Assets/Images/character2.png'

import './Suggester.css'

// TODO: props.target === true이면 하이라이트 처리 

const Suggester = (props) => {
    return (
        <div className = 'Suggester'>
            <img id = 'suggester-image' alt = {Character2} src = {Character2}/>
            {(props.final === "false") && 
                <button 
                className = 'SelectSuggester'
                onClick = {props.click}
                >
                {props.name}
                </button>
            }
            {(props.final === "true") &&
                <div className = 'deposit'>Suggester Deposit : {props.deposit}</div>
            }
            <div className = 'Reputation'>
                {props.reputation}
            </div>
        </div>
    )
}

export default Suggester;