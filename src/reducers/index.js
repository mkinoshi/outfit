import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';

const rootReducer = combineReducers({
  LoginReducer: LoginReducer,
  routing: routerReducer
});

export default rootReducer;
