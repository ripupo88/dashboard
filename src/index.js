import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
//apollo client
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
// core components
import { resolvers, typeDefs } from './resolvers';
import Admin from 'layouts/Admin.js';
import login from 'layouts/login.js';

import 'assets/css/material-dashboard-react.css?v=1.8.0';

const cache = new InMemoryCache();
const client = new ApolloClient({
    cache,
    link: new HttpLink({
        uri: 'http://localhost:4000/graphql',
        headers: {
            authorization: localStorage.getItem('token'),
            'client-name': 'Space Explorer [web]',
            'client-version': '1.0.0'
        }
    }),
    resolvers,
    typeDefs
});

const hist = createBrowserHistory();
const localToken = localStorage.getItem('token') || '';
console.log('sssssss', localToken);

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path='/admin' component={Admin} />
            <Route path='/login' component={login} />
            <Redirect from='/' to='/login' />
        </Switch>
    </Router>,
    document.getElementById('root')
);
