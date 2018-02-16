import { combineReducers } from 'redux';
import { counter } from './counter';
import { user } from './user';

const rootReducer = combineReducers({
  user,
  counter
})

export default rootReducer;
