import { combineReducers } from 'redux';
import ProfileReducer from '../../modules/profile/ProfileReducer';
import AuthReducer from '../../modules/auth/AuthReducer'
const rootReducer = combineReducers({
    ProfileReducer,
    AuthReducer

});
export default rootReducer;
