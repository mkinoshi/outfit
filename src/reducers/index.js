import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import modalReducer from './modalReducer';
import cardReducer from './cardReducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
  modalReducer: modalReducer,
  cardReducer: cardReducer,
  routing: routerReducer
});

export default rootReducer;
