
import { UserProfile } from '../../shared/models/Profile';
import { ACTION_TYPES } from './ConverstationActions';


const initialState: {
    isInitializing: boolean,
    isLoading: boolean,
    canLoadMore: boolean,
    errorMessage: null | string
    listUser: any

} = {
    isInitializing: true,
    isLoading: false,
    errorMessage: null,
    canLoadMore: false,
    listUser: null



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

        case ACTION_TYPES.SET_MESSAGES_ERROR:

            return {
                ...state,
                errorMessage: action.payload.errorMessage,

            };

        default:
            return state;
    }
};
export default ConverstationReducer;
