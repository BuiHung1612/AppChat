
import { ACTION_TYPES } from './NewsActions';


const initialState: {
    isInitializing: boolean,
    isLoading: boolean,
    canLoadMore: boolean,
    errorMessage: null | string
    news: any

} = {
    isInitializing: true,
    isLoading: false,
    errorMessage: null,
    canLoadMore: false,
    news: null



};

export type newsState = Readonly<typeof initialState>;

const NewsReducer = (
    state: newsState = initialState,
    action: any,
): newsState => {
    if (action == null) {
        return state;
    }
    switch (action.type) {
        case ACTION_TYPES.SET_ISLOADING:

            return {
                ...state,
                isLoading: true,
            };
        case ACTION_TYPES.SET_LIST_POST:

            return {
                ...state,
                news: action.payload.news,
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
export default NewsReducer;
