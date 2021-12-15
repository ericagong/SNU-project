import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import './End.css'

class End extends Component {

    render () {

        return (
            <div className = 'End'>
                <p className = 'EndTitle'>Ending Credit</p>
                <div className = 'CreditInfo'>
                    <p className = 'TeamName'>
                        <b>Team D</b>&ensp;of Creative Integrated Design 2021 fall
                    </p>
                    <p className = 'SourcePage'>
                        <b>Git link</b>&ensp;
                        <p style = {{color: 'blue'}} onClick={() => window.open('https://github.com/ericagong/SNU-project', '_blank')}>github.com/ericagong/SNU-project</p>
                    </p>
                    <p className = 'Projects'>
                        <b>Related Project</b>&ensp;
                        <p style = {{color: 'blue'}} onClick={() => window.open('https://github.com/ScopeLift/scorched-earth', '_blank')}>github.com/ScopeLift/scorched-earth</p>
                    </p>
                </div>  
            </div>
        )
    }

}


export default withRouter(End);