import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';  
import thunk from 'redux-thunk';


import userReducer from './store/reducers/userReducer';
import articleReducer from './store/reducers/articleReducer';
import commentReducer from './store/reducers/commentReducer';

const rootReducer = combineReducers({
    userR : userReducer,
    articleR : articleReducer,
    commentR : commentReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store = {store} >
        <App /> 
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
