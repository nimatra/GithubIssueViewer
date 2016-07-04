/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Route, Router, Link, browserHistory} from 'react-router';
import { App } from './components/app';
import { IssueDetails } from './components/IssueDetails';


export default (
    <Route path='/'>
        <Route path='app' component={App}/>
        <Route path='details' component={IssueDetails}/>
    </Route>);
