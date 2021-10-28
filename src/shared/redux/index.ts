import { combineReducers } from 'redux';
import ProfileReducer from '../../modules/profile/ProfileReducer';
import AuthReducer from '../../modules/auth/AuthReducer'
import ConverstationReducer from '../../modules/converstation/ConverstationReducer'
const rootReducer = combineReducers({
    ProfileReducer,
    AuthReducer,
    ConverstationReducer

});
export default rootReducer;
