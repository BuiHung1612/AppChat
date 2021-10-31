import { combineReducers } from 'redux';
import ProfileReducer from '../../modules/profile/ProfileReducer';
import AuthReducer from '../../modules/auth/AuthReducer'
import ConverstationReducer from '../../modules/converstation/ConverstationReducer'
import AddPostReducer from '../../modules/addPost/AddPostReducer';
import UserProfileReducer from '../../components/UserProfileReducer';
import NewsReducer from '../../modules/news/NewsReducer';
const rootReducer = combineReducers({
    ProfileReducer,
    AuthReducer,
    ConverstationReducer,
    AddPostReducer,
    UserProfileReducer,
    NewsReducer

});
export default rootReducer;
