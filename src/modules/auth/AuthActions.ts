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
    SET_USER_IMAGE: 'auth/SET_USER_IMAGE',
    UPDATE_AVATAR: 'auth/UPDATE_AVATAR',
    LOADING_PROFILE: 'auth/LOADING_PROFILE'
};

export const onSignIn = (username: any, password: any) => async (dispatch: Dispatch) => {

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

export const createUser = (username: any, password: any, email: any, imgUrl: any) => async (dispatch: Dispatch) => {


    axios.post(`${DevConfig}/users/register`, {
        userName: username,
        passWord: password,
        email: email,
        imageUrl: imgUrl

    }).then((res: AxiosResponse<any>) => {

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

export const getImages = (userId: any) => async (dispatch: Dispatch) => {
    axios.post(`${DevConfig}/users/images`, {
        userId: userId,
    }).then((res: AxiosResponse<any>) => {

        dispatch({
            type: ACTION_TYPES.SET_USER_IMAGE,
            payload: {
                images: res.data.images
            },
        });


    })
}


export const getProfileUser = (token: any) => async (dispatch: Dispatch) => {

    dispatch({
        type: ACTION_TYPES.LOADING_PROFILE,
        payload: {
            isLoadingProfile: true
        },
    });

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token}`
    }
    axios.post(`${DevConfig}/users/profile`, {}, { headers: headers }
    ).then((res: AxiosResponse<any>) => {
        //@ts-ignore


        dispatch({
            type: ACTION_TYPES.SET_PROFILE,
            payload: {
                profile: res.data.user,
                isLoadingProfile: false
            },
        });


    })

}

export const updateAvatar = (token: any, image: string) => async (dispatch: Dispatch) => {
    dispatch({
        type: ACTION_TYPES.SET_IS_LOADING,
        payload: {
            isLoading: true
        },
    });

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token?.token}`
    }
    axios.post(`${DevConfig}/users/update-Avatar`, {
        image: image
    }, { headers }).then((res: AxiosResponse<any>) => {


        if (res.data.status == 200) {
            //@ts-ignore


            dispatch({
                type: ACTION_TYPES.UPDATE_AVATAR,
                payload: {
                    isUpdateSuccess: true,
                    isLoading: false
                },
            });

            dispatch(getProfileUser(token))

        }
        else {
            dispatch({
                type: ACTION_TYPES.SET_ERROR_MESSAGE,
                payload: {
                    errorMessage: 'lấy dữ liệu thất bại'
                },
            });
        }
    })
};




// export const SaveUserLogin = () => async (dispatch: Dispatch) => {
//     dispatch({
//         type: ACTION_TYPES.USER_LOGIN,
//         payload: {
//             dataUser:
//         },
//     });
// }