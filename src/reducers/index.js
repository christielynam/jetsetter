import { combineReducers } from 'redux';
import { user } from './user';
import { photoIsLoading, photoError, photo } from './photo';


const rootReducer = combineReducers({
  user,
  photoIsLoading,
  photoError,
  photo
})

export default rootReducer;
