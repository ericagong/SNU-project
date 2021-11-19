import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Limitations extends Component {

    clickNextHandler = () => {
        this.props.history.push('/end')
    }

    render () {
        return (
            <div className = 'Limitations'>
                <div className = 'Limitation'>
                    프로젝트 가정상의 한계들
                </div>      
                <button 
                    id = 'next-button'
                    onClick = {() => this.clickNextHandler()}>
                    Next
                </button>
            </div>
        )
    }

}


export default withRouter(Limitations);