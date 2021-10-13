
import { ACTION_TYPES } from './AuthActions';


const initialState: {
    isInitializing: boolean,
    isLoading: boolean,
    dataUser: null,
    canLoadMore: boolean,
    errorMessage: null | string
} = {
    isInitializing: true,
    isLoading: false,
    dataUser: null,
    errorMessage: null,
    canLoadMore: false
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
                dataUser: action.payload.dataUser,

            };

        default:
            return state;
    }
};
export default AuthRecuder;
