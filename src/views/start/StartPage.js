import React, { Component } from 'react';

import Start from '../../containers/start/Start';
import Footer from '../../containers/footer/Footer';

class StartPage extends Component {
    render () {
        return (
            <div className = 'StartPage'>
                {/* startPage */}
                <Start/>
                <Footer/>
            </div>
        )
    }
}

export default StartPage;