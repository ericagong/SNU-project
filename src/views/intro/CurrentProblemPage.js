import React, { Component } from 'react';

// import Login from '../containers/login/Login';
// import Footer from '../../components/footer/Footer';
import Problems from '../../containers/intro/Problems';

class CurrentProbelmPage extends Component {
    render () {
        return (
            <div className = 'CurrentProbelmPage'>
                CurrentProblemPage
                <Problems/>
                {/* <Login/>
                <Footer/> */}
            </div>
        )
    }
}

export default CurrentProbelmPage;