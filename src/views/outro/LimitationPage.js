import React, { Component } from 'react';

import Limitations from '../../containers/outro/Limitations';
import Footer from '../../containers/footer/Footer';

class LimitationPage extends Component {
    render () {
        return (
            <div className = 'LimitationPage'>
                LimitationPage
                <Limitations/>
                <Footer/>
            </div>
        )
    }
}

export default LimitationPage;