import { combineReducers } from 'redux';
import things from './things';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
    things,
    errors,
    messages,
    auth,
});