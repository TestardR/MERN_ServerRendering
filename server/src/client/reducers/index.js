import { combineReducers } from 'redux';
import usersReducer from './';

export default combineReducers({
  users: usersReducer
});
