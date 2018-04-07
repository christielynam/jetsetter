import { combineReducers } from 'redux';
import { user } from './user';
import { photo, photoError, photoIsLoading } from './photoReducer';


const rootReducer = combineReducers({
  user,
  photo,
  photoError,
  photoIsLoading
})

export default rootReducer;
