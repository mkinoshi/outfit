import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
  routing: routerReducer
});

export default rootReducer;
