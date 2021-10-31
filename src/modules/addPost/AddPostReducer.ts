
import { ACTION_TYPES } from './AddPostActions';


const initialState: {
    isInitializing: boolean,
    isLoading: boolean,
    canLoadMore: boolean,
    errorMessage: null | string
    createPost: any

} = {
    isInitializing: true,
    isLoading: false,
    errorMessage: null,
    canLoadMore: false,
    createPost: null



};

export type AddPostState = Readonly<typeof initialState>;

const AddPostReducer = (
    state: AddPostState = initialState,
    action: any,
): AddPostState => {
    if (action == null) {
        return state;
    }
    switch (action.type) {
        case ACTION_TYPES.CREATE_POST:

            return {
                ...state,
                createPost: action.payload.createPost,
                errorMessage: null,
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
export default AddPostReducer;
