
import { UserProfile } from '../../shared/models/Profile';
import { ACTION_TYPES } from './AuthActions';


const initialState: {
    isInitializing: boolean,
    isLoading: boolean,
    dataUser: null,
    canLoadMore: boolean,
    errorMessage: null | string
    token: null | string,
    profile: UserProfile | null,
    status: string | null
} = {
    isInitializing: true,
    isLoading: false,
    dataUser: null,
    errorMessage: null,
    canLoadMore: false,
    token: null,
    status: null,
    profile: null
};

export type AuthState = Readonly<typeof initialState>;

const AuthRecuder = (
    state: AuthState = initialState,
    action: any,
): AuthState => {
    if (action == null) {
        return state;
    }
    switch (action.type) {
        case ACTION_TYPES.USER_LOGIN:

            return {
                ...state,
                token: action.payload.token,
                errorMessage: null,
            };
        case ACTION_TYPES.USER_LOGOUT:

            return {
                ...state,
                token: null,
                errorMessage: null,

            };

        case ACTION_TYPES.SET_ERROR_MESSAGE:

            return {
                ...state,
                errorMessage: action.payload.errorMessage,

            };
        case ACTION_TYPES.SET_STATUS:
            console.log('action', action.payload);

            return {
                ...state,
                status: action.payload.status,

            };
        case ACTION_TYPES.SET_PROFILE:


            return {
                ...state,
                profile: action.payload.profile,

            };

        default:
            return state;
    }
};
export default AuthRecuder;
