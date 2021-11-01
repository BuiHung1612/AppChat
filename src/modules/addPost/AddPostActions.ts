import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import DevConfig from "../../config/Enviroment";

export const ACTION_TYPES = {
    CREATE_POST: 'addPost/CREATE_POST',
    SET_POST: 'addPost/SET_POST',
    SET_ERROR_MESSAGE: 'addPost/SET_ERROR_MESSAGE'
};

export const createPost = (token: any, postContent: string, imagePost: string) => async (dispatch: Dispatch) => {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token}`
    }
    axios.post(`${DevConfig}/users/posts/create`, {
        token: token.token,
        postContent: postContent,
        imagePost: imagePost

    }, { headers }).then((res: AxiosResponse<any>) => {

        // if (res.data.length !== 0) {
        //     dispatch({
        //         type: ACTION_TYPES.CREATE_POST,
        //         payload: {
        //             createPost: res.data
        //         },
        //     });
        // }
        // else {
        //     dispatch({
        //         type: ACTION_TYPES.SET_ERROR_MESSAGE,
        //         payload: {
        //             errorMessage: 'Có lỗi xảy ra trong quá trình!'
        //         },
        //     });
        // }
    })
}


