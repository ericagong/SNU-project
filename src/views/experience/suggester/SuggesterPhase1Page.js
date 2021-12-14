import React, { Component } from 'react';

import SuggesterPhase1 from '../../../containers/experience/suggester/SuggesterPhase1';
import Footer from '../../../containers/footer/Footer';

class SuggesterPhase1Page extends Component {
    render () {
        let suggesterDeposit = parseInt(this.props.match.params.deposit)
        return (
            <div className = 'SuggesterPhase1Page'>
                SuggesterPhase1Page
                <SuggesterPhase1 deposit = {suggesterDeposit}/>
                <Footer/>
            </div>
        )
    }
}

export default SuggesterPhase1Page;