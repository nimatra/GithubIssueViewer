import * as React from 'react';

import routes from '../store/routes';
import configureStore from '../store/configure-store';
import {IconButton, FloatingActionButton, AppBar, } from 'material-ui';

const { Provider } = require('react-redux');
const { Router, browserHistory } = require('react-router');
const { syncHistoryWithStore } = require('react-router-redux');

interface IAppProps extends React.Props<any> {
};
const appBarStyle = {
    margin: '0px'
};

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

/**
 * 
 * A wrapper around all main compenents. It sets the header and theme for the app
 * @export
 * @class App
 * @extends {React.Component<IAppProps, void>}
 */
export class App extends React.Component<IAppProps, void> {
  render() {
    return (
      <div>
        <AppBar title="Github Issue Viewer" style={appBarStyle}
          iconElementRight={
            <IconButton onClick={() => window.location.href = 'https://github.com/nimatra/GithubIssueViewer'}>
              <img src="/public/github.png" />
            </IconButton>}
          />
        <Provider store={ store }>
          <Router history={ history }>
            { routes }
          </Router>
        </Provider>
      </div>
    );
  };
};

