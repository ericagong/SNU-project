import React, { Component } from 'react';

import SuggesterPhase0 from '../../../containers/experience/suggester/SuggesterPhase0';
import Footer from '../../../containers/footer/Footer';

class SuggesterPhase0Page extends Component {
    render () {
        return (
            <div className = 'SuggesterPhase0Page'>
                {/* SuggesterPhase0Page */}
                <SuggesterPhase0/>
                <Footer/> 
            </div>
        )
    }
}

export default SuggesterPhase0Page;