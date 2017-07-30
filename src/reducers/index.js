import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
  modalReducer: modalReducer,
  routing: routerReducer
});

export default rootReducer;
