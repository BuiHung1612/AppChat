import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import DevConfig from "../../config/Enviroment";

export const ACTION_TYPES = {
    SET_LIST_POST: 'news/SET_LIST_POST',
    SET_ERROR_MESSAGE: 'news/SET_ERROR_MESSAGE',
    SET_ISLOADING: 'news/SET_ISLOADING'
};

export const getNews = (token: any) => async (dispatch: Dispatch) => {

    dispatch({
        type: ACTION_TYPES.SET_ISLOADING,
        payload: {
            isloading: true
        },
    });
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token}`
    }
    axios.post(`${DevConfig}/users/posts/list`, {}, { headers }).then((res: AxiosResponse<any>) => {


        if (res.data.data) {
            dispatch({
                type: ACTION_TYPES.SET_LIST_POST,
                payload: {
                    news: res.data.data,
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


