import React, { Component } from 'react';

import UserPhase1 from '../../../containers/experience/user/UserPhase1';
import Footer from '../../../containers/footer/Footer';

class UserPhase1Page extends Component {
    render () {
        let reputation = parseInt(this.props.match.params.reputation)
        let suggesterID = parseInt(this.props.match.params.id)
        let userDeposit = parseInt(this.props.match.params.deposit)
        return (
            <div className = 'UserPhase1Page'>
                {/* UserPhase1Page */}
                <UserPhase1 reputation = {reputation} id = {suggesterID} deposit = {userDeposit}/>
                <Footer/>
            </div>
        )
    }
}

export default UserPhase1Page;