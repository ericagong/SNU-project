import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import StartPage from './views/start/StartPage';

import CurrentProblemPage from './views/intro/CurrentProblemPage';
import ProjectBackgroundPage from './views/intro/ProjectBackgroundPage';
import ProjectConceptPage from './views/intro/ProjectConceptPage';

import ChooseRolePage from './views/experience/ChooseRolePage';
import UserPhase0Page from './views/experience/user/UserPhase0Page';
import UserPhase1Page from './views/experience/user/UserPhase1Page';
import SuggesterPhase0Page from './views/experience/suggester/SuggesterPhase0Page';
import SuggesterPhase1Page from './views/experience/suggester/SuggesterPhase1Page';
import TerminateCondition0Page from './views/experience/terminate/TerminateCondition0Page';
import TerminateCondition1Page from './views/experience/terminate/TerminateCondition1Page';

import SandboxPage from './views/sandbox/SandboxPage';

import LimitationPage from './views/outro/LimitationPage';

import EndingPage from './views/end/EndingPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/start' exact component={StartPage}/>

          <Route path='/intro/problems' exact component={CurrentProblemPage}/>
          <Route path='/intro/background' exact component={ProjectBackgroundPage}/>
          <Route path='/intro/concept' exact component={ProjectConceptPage}/>

          <Route path='/experience/role' exact component={ChooseRolePage}/>
          <Route path='/experience/user/phase0' exact component={UserPhase0Page}/>
          <Route path='/experience/user/phase1/:id/:reputation/:deposit' exact component={UserPhase1Page}/>
          <Route path='/experience/suggester/phase0' exact component={SuggesterPhase0Page}/>
          <Route path='/experience/suggester/phase1/:deposit' exact component={SuggesterPhase1Page}/>
          <Route path='/experience/termination/conditions' exact component={TerminateCondition0Page}/>
          
          <Route path='/sandbox' exact component={SandboxPage}/>

          <Route path='/outro/limitations' exact component={LimitationPage}/>
          
          <Route path='/end' exact component={EndingPage}/>

          <Redirect exact from = '/' to = '/start'/>
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
