import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import DevConfig from "../../config/Enviroment";
import { FAKE_GET_API_USER } from "../home/ListUserData";

export const ACTION_TYPES = {
    SET_IS_INITIALIZING: 'profile/SET_IS_INITIALIZING',
    SET_IS_LOADING: 'profile/SET_IS_LOADING',
    SET_PROFILE: 'SET_PROFILE',
    SET_ERROR_MESSAGE: 'profile/SET_ERROR_MESSAGE',
    SET_POSTS: 'profile/SET_POSTS',
    SET_DELETE: 'profile/SET_DELETE'
};

export const getListPost = (token: any) => async (dispatch: Dispatch) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token}`
    }
    axios.post(`${DevConfig}/users/posts/getListPost`, {
    }, { headers }).then((res: AxiosResponse<any>) => {

        if (res.data.length !== 0) {
            dispatch({
                type: ACTION_TYPES.SET_POSTS,
                payload: {
                    listPost: res.data
                },
            });
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


export const deletePost = (token: any, postId: string) => async (dispatch: Dispatch) => {
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
    axios.post(`${DevConfig}/users/posts/delete`, {
        postId: postId
    }, { headers }).then((res: AxiosResponse<any>) => {

        if (res.data.status == 200) {
            dispatch({
                type: ACTION_TYPES.SET_DELETE,
                payload: {
                    isDeleteSuccess: true,
                    isLoading: false
                },
            });
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