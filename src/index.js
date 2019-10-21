import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
// core components
import Admin from 'layouts/Admin.js';
import login from 'layouts/login.js';

import 'assets/css/material-dashboard-react.css?v=1.8.0';

const client = new ApolloClient({
    uri: `http://localhost:8383/`,
    headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
    }
});

const hist = createBrowserHistory();

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router history={hist}>
            <Switch>
                <Route path="/admin" component={Admin} />
                <Route path="/login" component={login} />
                <Redirect from="/" to="/login" />
            </Switch>
        </Router>
    </ApolloProvider>,
    document.getElementById('root')
);
