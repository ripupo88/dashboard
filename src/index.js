import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
// core components
import Admin from 'layouts/Admin.js';
import login from 'layouts/login.js';

import 'assets/css/material-dashboard-react.css?v=1.8.0';

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/login" component={login} />
            <Redirect from="/" to="/login" />
        </Switch>
    </Router>,
    document.getElementById('root')
);
