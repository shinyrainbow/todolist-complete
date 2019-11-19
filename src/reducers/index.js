import { combineReducers } from 'redux';
import reducer from './TodoReducer'

const allReducers= combineReducers({
  TodoReducer :reducer
});

export default allReducers;
