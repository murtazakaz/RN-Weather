import { combineReducers } from 'redux';
import FirstReducer  from './FirstReducer';

export default combineReducers({
    first: FirstReducer
});