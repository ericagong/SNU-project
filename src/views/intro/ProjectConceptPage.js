import React, { Component } from 'react';


import Concept from '../../containers/intro/Concept';
import Footer from '../../containers/footer/Footer';

class ProjectConceptPage extends Component {
    render () {
        return (
            <div className = 'ProjectConceptPage'>
                ProjectConceptPage
                <Concept />
                <Footer/>
            </div>
        )
    }
}

export default ProjectConceptPage;