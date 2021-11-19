import React, { Component } from 'react';

import Problems from '../../containers/intro/Problems';
import Footer from '../../containers/footer/Footer';

class CurrentProbelmPage extends Component {
    render () {
        return (
            <div className = 'CurrentProbelmPage'>
                CurrentProbelmPage
                <Problems/>
                <Footer />
            </div>
        )
    }
}

export default CurrentProbelmPage;