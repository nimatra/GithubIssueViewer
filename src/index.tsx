import 'es5-shim';
import 'es6-shim';
import 'es6-promise';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {App} from './containers/App';
import {darkBaseTheme, lightBaseTheme} from 'material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Global styles
import './styles/index.css';

ReactDOM.render(
  <div>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme) }>
        <App/>
      </MuiThemeProvider>
  </div>,
  document.getElementById('root')
);
