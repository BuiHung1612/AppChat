import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import DevConfig from "../config/Enviroment";

export const ACTION_TYPES = {
    SET_USER_POST: 'userProfile/SET_USER_POST',
    SET_ERROR_MESSAGE: 'userProfilePost/SET_ERROR_MESSAGE',
    SET_ISLOADING: 'userProfilePost/SET_ISLOADING'
};

export const getFriendPost = (userId: string) => async (dispatch: Dispatch) => {

    dispatch({
        type: ACTION_TYPES.SET_ISLOADING,
        payload: {
            isloading: true
        },
    });
    const headers = {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token.token}`
    }
    axios.post(`${DevConfig}/users/posts/getPostFromUserId`, {

        userId: userId

    }, { headers }).then((res: AxiosResponse<any>) => {

        if (res.data.data) {
            dispatch({
                type: ACTION_TYPES.SET_USER_POST,
                payload: {
                    userPosts: res.data.data,
                    isloading: false
                },
            });
        }
        else {
            dispatch({
                type: ACTION_TYPES.SET_ERROR_MESSAGE,
                payload: {
                    errorMessage: 'Có lỗi xảy ra trong quá trình!'
                },
            });
        }
    })
}


