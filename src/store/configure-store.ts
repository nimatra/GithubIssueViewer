///<reference path="./dev-types.d.ts"/>

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
const thunk = require('redux-thunk').default;
const persistState = require('redux-localstorage');
const { browserHistory } = require('react-router');
const { routerMiddleware } = require('react-router-redux');

import promiseMiddleware from '../middleware/promise-middleware';
import logger from './logger';
import rootReducer from '../reducers';

function configureStore(initialState) {
  const store = compose(
    _getMiddleware()
  )(createStore)(rootReducer, initialState);

  _enableHotLoader(store);
  return store;
}

function _getMiddleware() {
  let middleware = [
    routerMiddleware(browserHistory),
    promiseMiddleware,
    thunk,
  ];

  if (__DEV__) {
    middleware = [...middleware, logger];
  }

  return applyMiddleware(...middleware);
}

function _enableHotLoader(store) {
  if (__DEV__ && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
}

function _getStorageConfig() {
  return {
    key: 'react-redux-seed',
    serialize: (store) => {
      return store && store.session ?
        JSON.stringify(store.session.toJS()) : store;
    },
    deserialize: (state) => ({
      session: state ? fromJS(JSON.parse(state)) : fromJS({}),
    }),
  };
}

export default configureStore;
