import { UserProfile } from '../../shared/models/Profile';
import { ACTION_TYPES } from './ProfileAction';


const initialState: {
    isInitializing: boolean,
    isLoading: boolean,
    dataProfile: null | UserProfile,
    canLoadMore: boolean,
    errorMessage: null | string,
    listPost: any
} = {
    isInitializing: true,
    isLoading: false,
    dataProfile: null,
    errorMessage: null,
    canLoadMore: false,
    listPost: null
};

export type ProfileState = Readonly<typeof initialState>;

const ProfileReducer = (
    state: ProfileState = initialState,
    action: any,
): ProfileState => {
    if (action == null) {
        return state;
    }
    switch (action.type) {
        case ACTION_TYPES.SET_PROFILE:

            return {
                ...state,
                errorMessage: null,
                canLoadMore: action.payload.canLoadMore,
                isLoading: action.payload.isLoading ?? state.isLoading,
                dataProfile: action.payload.profile,

            };
        case ACTION_TYPES.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };

        case ACTION_TYPES.SET_POSTS:
            return {
                ...state,
                listPost: action.payload.listPost,
            };

        case ACTION_TYPES.SET_ERROR_MESSAGE:
            return {
                ...state,
                isLoading: action.payload.isLoading ?? state.isLoading,
                errorMessage: action.payload.errorMessage,
            };
        default:
            return state;
    }
};
export default ProfileReducer;
