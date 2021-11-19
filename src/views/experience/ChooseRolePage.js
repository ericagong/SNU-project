import React, { Component } from 'react';

import ChooserRole from '../../containers/experience/ChooserRole';
import Footer from '../../containers/footer/Footer';

class ChooseRolePage extends Component {
    render () {
        return (
            <div className = 'ChooseRolePage'>
                ChooseRolePage
                <ChooserRole/>
                <Footer/>
            </div>
        )
    }
}

export default ChooseRolePage;