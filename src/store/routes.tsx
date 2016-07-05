import * as React from 'react';
const { IndexRoute, Route } = require('react-router');

import {App} from '../containers/materialapp';
import IssueDetails from '../containers/IssueDetails';


export default (
    <Route path='/'>
        <Route path='app' component={App}/>
        <Route path='details' component={IssueDetails}/>
    </Route>);