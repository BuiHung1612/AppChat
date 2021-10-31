
import { UserProfile } from '../../shared/models/Profile';
import { ACTION_TYPES } from './ConverstationActions';


const initialState: {
    isInitializing: boolean,
    isLoading: boolean,
    canLoadMore: boolean,
    errorMessage: null | string
    listUser: any,
    isAddSuccess: string | null,
    listRequestFriend: any,
    acceptLoading: boolean,
    listFriend: any,
    messages: any

} = {
    isInitializing: true,
    isLoading: false,
    errorMessage: null,
    canLoadMore: false,
    listUser: null,
    isAddSuccess: null,
    listRequestFriend: null,
    acceptLoading: false,
    listFriend: null,
    messages: null



};

export type ConverstationState = Readonly<typeof initialState>;

const ConverstationReducer = (
    state: ConverstationState = initialState,
    action: any,
): ConverstationState => {
    if (action == null) {
        return state;
    }
    switch (action.type) {
        case ACTION_TYPES.SET_LIST_USER:

            return {
                ...state,
                listUser: action.payload.listUser,
                errorMessage: null,
            };
        case ACTION_TYPES.SET_ISLOADING:

            return {
                ...state,
                isLoading: action.payload.isLoading,

            };
        case ACTION_TYPES.SET_LIST_FRIEND:

            return {
                ...state,
                listFriend: action.payload.listFriend,
                isLoading: action.payload.isLoading,

            };
        case ACTION_TYPES.SET_LIST_MESSAGES:

            return {
                ...state,
                messages: action.payload.messages,
                isLoading: action.payload.isLoading,

            };

        case ACTION_TYPES.SET_MESSAGES_ERROR:

            return {
                ...state,
                errorMessage: action.payload.errorMessage,

            };

        case ACTION_TYPES.SET_MESSAGE_ADDFRIEND:

            return {
                ...state,
                isAddSuccess: action.payload.isAddSuccess,

            };

        case ACTION_TYPES.SET_LIST_REQUESTFRIEND:

            return {
                ...state,
                listRequestFriend: action.payload.listRequestFriend,

            };
        case ACTION_TYPES.SET_ACCEPT_LOADING:

            return {
                ...state,
                acceptLoading: action.payload.acceptLoading,

            };
        default:
            return state;
    }
};
export default ConverstationReducer;
