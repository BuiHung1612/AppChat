import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import DevConfig from "../../config/Enviroment";

export const ACTION_TYPES = {
    USER_LOGIN: 'USER_LOGIN',
    USER_LOGOUT: 'USER_LOGOUT',
    SET_IS_LOADING: 'profile/SET_IS_LOADING',
    SET_PROFILE: 'SET_PROFILE',
    SET_ERROR_MESSAGE: 'profile/SET_ERROR_MESSAGE',
};

export const onSignIn = (username: any, password: any) => async (dispatch: Dispatch) => {
    console.log(username, password);

    axios.post(`${DevConfig}/users/login`, {
        username: username,
        password: password
    }).then((res: AxiosResponse<any>) => {
        if (res.data.isError == false) {
            dispatch({
                type: ACTION_TYPES.USER_LOGIN,
                payload: {
                    token: res.data
                },
            });
        }
        else {
            dispatch({
                type: ACTION_TYPES.SET_ERROR_MESSAGE,
                payload: {
                    errorMessage: res.data.message
                },
            });
        }
    })

}
export const onSignOut = () => async (dispatch: Dispatch) => {
    dispatch({
        type: ACTION_TYPES.USER_LOGOUT,
    });
}


// export const SaveUserLogin = () => async (dispatch: Dispatch) => {
//     dispatch({
//         type: ACTION_TYPES.USER_LOGIN,
//         payload: {
//             dataUser:
//         },
//     });
// }