import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import './End.css'

class End extends Component {

    render () {
        // const initialState = {
        //     projects : [
        //         {},
        //         {},
        //         {},
        //     ]
        // }
        
        let projects = null

        return (
            <div className = 'End'>
                <p className = 'EndTitle'>Ending Credit</p>
                <div className = 'CreditInfo'>
                    <p className = 'TeamName'>
                        Team Name of 창통설
                    </p>
                    <p className = 'SourcePage'>
                        Git link
                    </p>
                    <p className = 'Projects'>
                        Related Project
                        {projects}
                    </p>
                </div>  
            </div>
        )
    }

}


export default withRouter(End);