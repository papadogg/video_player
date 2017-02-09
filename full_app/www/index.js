//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './components/App';
//import {Router, Route, IndexRoute, browserHistory } from 'react-router';
//import Main from './components/Main';
//import Player from './components/Player';
//
//ReactDOM.render(
//    <Router history={browserHistory}>
//        <Route path="/" component={App}>
//            <IndexRoute component={Main}/>
//            <Route path="/:id" component={Player} />
//        </Route>
//    </Router>,
//    document.getElementById("app")
//);


import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(
    <App/>,
    document.getElementById("app")
);