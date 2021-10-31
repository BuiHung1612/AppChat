
import { ACTION_TYPES } from './UserProfileActions';


const initialState: {
    isInitializing: boolean,
    isLoading: boolean,
    canLoadMore: boolean,
    errorMessage: null | string
    createPost: any,
    userPosts: any

} = {
    isInitializing: true,
    isLoading: false,
    errorMessage: null,
    canLoadMore: false,
    createPost: null,
    userPosts: null



};

export type UserProfile = Readonly<typeof initialState>;

const UserProfileReducer = (
    state: UserProfile = initialState,
    action: any,
): UserProfile => {
    if (action == null) {
        return state;
    }
    switch (action.type) {
        case ACTION_TYPES.SET_ISLOADING:

            return {
                ...state,
                isLoading: true,
            };
        case ACTION_TYPES.SET_USER_POST:

            return {
                ...state,
                userPosts: action.payload.userPosts,
                isLoading: false,
            };

        case ACTION_TYPES.SET_ERROR_MESSAGE:

            return {
                ...state,
                errorMessage: action.payload.errorMessage,

            };

        default:
            return state;
    }
};
export default UserProfileReducer;
