import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import DevConfig from "../../config/Enviroment";
import { FAKE_GET_API_USER } from "../home/ListUserData";

export const ACTION_TYPES = {
    SET_IS_INITIALIZING: 'profile/SET_IS_INITIALIZING',
    SET_IS_LOADING: 'profile/SET_IS_LOADING',
    SET_PROFILE: 'SET_PROFILE',
    SET_ERROR_MESSAGE: 'profile/SET_ERROR_MESSAGE',
    SET_POSTS: 'profile/SET_POSTS'
};

export const getListPost = (token: any) => async (dispatch: Dispatch) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token}`
    }
    axios.post(`${DevConfig}/users/posts/getListPost`, {


    }, { headers }).then((res: AxiosResponse<any>) => {
        console.log('ket qua tra ve', res.data);

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
    // else {
    //     let dataState = getState().historyReducer.dataState;
    //     if (dataState !== DataState.loaded) {
    //         dataState = DataState.failed
    //     }
    //     dispatch({
    //         type: ACTION_TYPES.SET_HISTORY,
    //         payload: {
    //             history: [],
    //             canLoadMore: false,
    //             dataState,
    //             isLoading: false
    //         },
    //     });
    //     dispatchErrorMessage("Lấy danh sách biểu mẫu thất bại. Xin vui lòng thử lại sau.", ACTION_TYPES.SET_ERROR_MESSAGE, dispatch);
    // }




    // } catch (error) {
    //     dispatch({ type: ACTION_TYPES.SET_ERROR_MESSAGE });
    // }
};