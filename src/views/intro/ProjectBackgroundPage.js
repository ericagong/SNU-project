import React, { Component } from 'react';

import Background from '../../containers/intro/Background';
import Footer from '../../containers/footer/Footer';

class ProjectBackgroundPage extends Component {
    render () {
        return (
            <div className = 'ProjectBackgroundPage'>
                {/* ProjectBackgroundPage */}
                <Background/>
                <Footer/>
            </div>
        )
    }
}

export default ProjectBackgroundPage;