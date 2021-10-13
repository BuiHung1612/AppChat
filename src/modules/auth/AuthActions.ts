import { Dispatch } from "redux";

export const ACTION_TYPES = {
    USER_LOGIN: 'USER_LOGIN',
    SET_IS_LOADING: 'profile/SET_IS_LOADING',
    SET_PROFILE: 'SET_PROFILE',
    SET_ERROR_MESSAGE: 'profile/SET_ERROR_MESSAGE',
};


// export const SaveUserLogin = () => async (dispatch: Dispatch) => {
//     dispatch({
//         type: ACTION_TYPES.USER_LOGIN,
//         payload: {
//             dataUser:
//         },
//     });
// }