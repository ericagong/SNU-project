import React from 'react'

// TODO: props.target === true이면 하이라이트 처리 

const Suggester = (props) => {
    return (
        <div className = 'Suggester'>
            <img id = 'suggester-image' alt = 'suggester-image-alt' src = './'/>
            <button 
                className = 'SelectSuggester'
                onClick = {props.click}
            >
                {props.name}
            </button>
            <div className = 'Reputation'>
                {props.reputation}
            </div>
        </div>
    )
}

export default Suggester;