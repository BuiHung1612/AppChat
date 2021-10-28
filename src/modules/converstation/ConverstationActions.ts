import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import DevConfig from "../../config/Enviroment";

export const ACTION_TYPES = {
    SET_LIST_USER: 'converstation/SET_LIST_USER',
    SET_MESSAGES_ERROR: 'converstation/SET_MESSAGES_ERROR'
};

export const getListUser = () => async (dispatch: Dispatch) => {

    axios.get(`${DevConfig}/users/list`, {

    }).then((res: AxiosResponse<any>) => {
        if (res.data.length !== 0) {
            dispatch({
                type: ACTION_TYPES.SET_LIST_USER,
                payload: {
                    listUser: res.data
                },
            });
        }
        else {
            dispatch({
                type: ACTION_TYPES.SET_MESSAGES_ERROR,
                payload: {
                    errorMessage: 'lấy dữ liệu thất bại'
                },
            });
        }
    })
}


