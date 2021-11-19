import React, { Component } from 'react';

import UserPhase0 from '../../../containers/experience/user/UserPhase0';
import Footer from '../../../containers/footer/Footer';

class UserPhase0Page extends Component {
    
    
    render () {
        return (
            <div className = 'UserPhase0Page'>
                UserPhase0Page
                <UserPhase0 />
                <Footer/>
            </div>
        )
    }
}

export default UserPhase0Page;