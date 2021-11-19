import React, { Component } from 'react';

import Sandbox from '../../containers/sandbox/Sandbox';
import Footer from '../../containers/footer/Footer';

class SandboxPage extends Component {
    render () {
        return (
            <div className = 'SandboxPage'>
                SandboxPage
                <Sandbox/>
                <Footer/>
            </div>
        )
    }
}

export default SandboxPage;