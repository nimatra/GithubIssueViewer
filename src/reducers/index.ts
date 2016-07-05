import { combineReducers } from 'redux';
const { routerReducer } = require('react-router-redux');
const formReducer = require('redux-form').reducer;
import github from './github';

const rootReducer = combineReducers({
  github,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
