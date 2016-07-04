/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {Card, CardActions, CardHeader, CardText, CardTitle, AppBar} from 'material-ui';
import {Route, Router, Link, browserHistory} from 'react-router';

import { App } from './components/app';
import { githubReducer } from './reducers';
import Routes from './Routes';
import thunkMiddleware from 'redux-thunk';

declare const requires: (name: String) => any;

interface IHotModule {
  hot?: { accept: (path: string, callback: () => void) => void };
};

declare const module: IHotModule;

function configureStore(): Store {
  const store: Store = createStore(githubReducer, applyMiddleware(
    thunkMiddleware
  ));

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer: any = requires('./reducers').anReducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

const store: Store = configureStore();


class Main extends React.Component<{}, {}> {
  public render(): React.ReactElement<Provider> {
    return (<Provider store={store}>
      <Router history={browserHistory}
        routes={Routes}/>
    </Provider>);
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
