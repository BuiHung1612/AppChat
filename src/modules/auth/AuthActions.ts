import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import DevConfig from "../../config/Enviroment";

export const ACTION_TYPES = {
    USER_LOGIN: 'auth/USER_LOGIN',
    USER_LOGOUT: 'auth/USER_LOGOUT',
    SET_IS_LOADING: 'auth/SET_IS_LOADING',
    SET_STATUS: 'auth/STATUS',
    SET_PROFILE: 'auth/SET_PROFILE',
    SET_ERROR_MESSAGE: 'auth/SET_ERROR_MESSAGE',
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

export const createUser = (username: any, password: any, email: any) => async (dispatch: Dispatch) => {
    console.log(username, password, email);

    axios.post(`${DevConfig}/users/register`, {
        userName: username,
        passWord: password,
        email: email

    }).then((res: AxiosResponse<any>) => {
        console.log('statuss', res.data.message);
        dispatch({
            type: ACTION_TYPES.SET_STATUS,
            payload: {
                status: res.data.message
            },
        });


    })
}
export const onSignOut = () => async (dispatch: Dispatch) => {
    dispatch({
        type: ACTION_TYPES.USER_LOGOUT,
    });
}

export const setStatus = () => async (dispatch: Dispatch) => {
    dispatch({
        type: ACTION_TYPES.SET_STATUS,
        payload: {
            status: null
        }
    });
}
export const getProfileUser = (token: any) => async (dispatch: Dispatch) => {
    console.log('token', token);

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token}`
    }
    axios.post(`${DevConfig}/users/profile`, {}, { headers: headers }
    ).then((res: AxiosResponse<any>) => {
        dispatch({
            type: ACTION_TYPES.SET_PROFILE,
            payload: {
                profile: res.data.user
            },
        });


    })
    // dispatch({
    //     type: ACTION_TYPES.SET_STATUS,
    //     payload: {
    //         status: null
    //     }
    // });
}


// export const SaveUserLogin = () => async (dispatch: Dispatch) => {
//     dispatch({
//         type: ACTION_TYPES.USER_LOGIN,
//         payload: {
//             dataUser:
//         },
//     });
// }