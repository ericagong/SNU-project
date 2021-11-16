import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import LoginPage from './views/LoginPage';
import ArticleListPage from './views/ArticleListPage';
import ArticleCreatePage from './views/ArticleCreatePage';
import ArticleDetailPage from './views/ArticleDetailPage';
import ArticleEditPage from './views/ArticleEditPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/login' exact component={LoginPage}/>
          <Route path='/articles' exact component={ArticleListPage}/>
          <Route path='/articles/create' exact component={ArticleCreatePage}/>
          <Route path='/articles/:id' exact component={ArticleDetailPage}/>
          <Route path='/articles/:id/edit' exact component={ArticleEditPage}/>
          <Redirect exact from='/' to='login'/>
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
