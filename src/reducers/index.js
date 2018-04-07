import { combineReducers } from 'redux';
import { counter } from './counter';
import { user } from './user';
import { photo } from './photoReducer';

const rootReducer = combineReducers({
  user,
  counter,
  photo,
})

export default rootReducer;
