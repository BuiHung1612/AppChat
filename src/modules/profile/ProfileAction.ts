import { Dispatch } from "redux";
import { FAKE_GET_API_USER } from "../home/ListUserData";

export const ACTION_TYPES = {
    SET_IS_INITIALIZING: 'profile/SET_IS_INITIALIZING',
    SET_IS_LOADING: 'profile/SET_IS_LOADING',
    SET_PROFILE: 'SET_PROFILE',
    SET_ERROR_MESSAGE: 'profile/SET_ERROR_MESSAGE',
};

export const getProfile = () => async (dispatch: Dispatch) => {
    dispatch({
        type: ACTION_TYPES.SET_IS_LOADING,
        payload: {
            isLoading: true,
        },
    });
    const result: any = await FAKE_GET_API_USER();
    if (result.data) {
        let canLoadMore = false;
        dispatch({
            type: ACTION_TYPES.SET_PROFILE,
            payload: {
                profile: result.data,
                canLoadMore,
                isLoading: false
            },
        });
    }
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