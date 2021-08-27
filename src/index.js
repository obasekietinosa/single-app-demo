import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';

var initialState = global.window && global.window.__INITIAL_STATE__

initialState = initialState ? JSON.parse(JSON.stringify(initialState).split('srcipt>').join('script>')) : []

ReactDOM.hydrate(<App initialState={ initialState } />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
