import React, { Component } from 'react';

import UserPhase1 from '../../../containers/experience/user/UserPhase1';
import Footer from '../../../containers/footer/Footer';

class UserPhase1Page extends Component {
    render () {
        let deposit = parseInt(this.props.match.params.deposit)
        let suggesterID = parseInt(this.props.match.params.id)
        return (
            <div className = 'UserPhase1Page'>
                UserPhase1Page
                <UserPhase1 deposit={deposit} suggesterID={suggesterID}/>
                <Footer/>
            </div>
        )
    }
}

export default UserPhase1Page;