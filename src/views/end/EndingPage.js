import React, { Component } from 'react';

import End from '../../containers/end/End';
import Footer from '../../containers/footer/Footer';

class EndingPage extends Component {
    render () {
        return (
            <div className = 'EndingPage'>
                {/* EndingPage */}
                <End/>
                <Footer />
            </div>
        )
    }
}

export default EndingPage;