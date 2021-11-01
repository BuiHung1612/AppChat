import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import DevConfig from "../../config/Enviroment";

export const ACTION_TYPES = {
    SET_LIST_USER: 'converstation/SET_LIST_USER',
    SET_MESSAGES_ERROR: 'converstation/SET_MESSAGES_ERROR',
    SET_MESSAGE_ADDFRIEND: 'converstation/SET_MESSAGE_ADDFRIEND',
    SET_LIST_REQUESTFRIEND: 'converstation/SET_LIST_REQUESTFRIEND',
    SET_ACCEPT_LOADING: 'converstation/SET_ACCEPT_LOADING',
    SET_LIST_FRIEND: 'converstation/SET_LIST_FRIEND',
    SET_ISLOADING: 'converstation/SET_ISLOADING',
    SET_LIST_MESSAGES: 'converstation/SET_LIST_MESSAGES'
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

export const addFriend = (userId: any, token: any) => async (dispatch: Dispatch) => {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token?.token}`
    }
    axios.post(`${DevConfig}/friends/addFriend`, {
        userId: userId
    }, { headers }).then((res: AxiosResponse<any>) => {

        console.log(res.data);

        if (res.data.status == 200) {
            dispatch({
                type: ACTION_TYPES.SET_MESSAGE_ADDFRIEND,
                payload: {
                    isAddSuccess: res.data.message
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



export const getListRequestFriend = (token: any) => async (dispatch: Dispatch) => {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token}`
    }
    axios.post(`${DevConfig}/friends/getListRequest`, {

    }, { headers }).then((res: AxiosResponse<any>) => {

        console.log('lời mời kết bạn ', res.data);

        if (res.data.list_request) {
            dispatch({
                type: ACTION_TYPES.SET_LIST_REQUESTFRIEND,
                payload: {
                    listRequestFriend: res.data.list_request
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

export const acceptRequestFriend = (token: any, requestBody: any) => async (dispatch: Dispatch) => {

    dispatch({
        type: ACTION_TYPES.SET_ACCEPT_LOADING,
        payload: {
            acceptLoading: true
        },
    });
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token}`
    }
    axios.post(`${DevConfig}/friends/acceptRequest`, {
        request_sender_id: requestBody.request_sender_id,
        request_sender_name: requestBody.request_sender_name,
        request_sender_img: requestBody.request_sender_img,
        id_request: requestBody.id_request
    }, { headers }).then((res: AxiosResponse<any>) => {

        if (res.data.status) {
            dispatch({
                type: ACTION_TYPES.SET_ACCEPT_LOADING,
                payload: {
                    acceptLoading: false
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




export const getListFriend = (token: any) => async (dispatch: Dispatch) => {


    dispatch({
        type: ACTION_TYPES.SET_ISLOADING,
        payload: {
            isLoading: true
        },
    });

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token}`
    }
    axios.post(`${DevConfig}/friends/listFriend`, {

    }, { headers }).then((res: AxiosResponse<any>) => {

        if (res.data.data) {
            dispatch({
                type: ACTION_TYPES.SET_LIST_FRIEND,
                payload: {
                    listFriend: res.data.data,
                    isLoading: false
                },
            });
        }
        else {
            dispatch({
                type: ACTION_TYPES.SET_MESSAGES_ERROR,
                payload: {
                    errorMessage: 'lấy dữ liệu thất bại',
                    isLoading: false
                },
            });
        }
    }).catch(err => {
        dispatch({
            type: ACTION_TYPES.SET_MESSAGES_ERROR,
            payload: {
                errorMessage: 'lấy dữ liệu thất bại',
                isLoading: false
            },
        });
    })
}


export const sendMessage = (_id: any, createdAt: any, text: any, user: any, token: any, roomChat_id: any, picture: any) => async (dispatch: Dispatch) => {
    console.log('picture', picture);


    dispatch({
        type: ACTION_TYPES.SET_ISLOADING,
        payload: {
            isLoading: true
        },
    });

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token}`
    }
    axios.post(`${DevConfig}/messages/sendMessage`, {
        roomChat_id: roomChat_id,
        id_message: _id,
        createdAt: createdAt,
        text: text,
        user: user,
        picture: picture,


    }, { headers }).then((res: AxiosResponse<any>) => {

        // if (res.data.data) {
        //     dispatch({
        //         type: ACTION_TYPES.SET_LIST_FRIEND,
        //         payload: {
        //             listFriend: res.data.data,
        //             isLoading: false
        //         },
        //     });
        // }
        // else {
        //     dispatch({
        //         type: ACTION_TYPES.SET_MESSAGES_ERROR,
        //         payload: {
        //             errorMessage: 'lấy dữ liệu thất bại',
        //             isLoading: false
        //         },
        //     });
        // }
    })
}


export const getMessage = (roomChat_id: any, token: any) => async (dispatch: Dispatch) => {


    dispatch({
        type: ACTION_TYPES.SET_ISLOADING,
        payload: {
            isLoading: true
        },
    });

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.token}`
    }
    axios.post(`${DevConfig}/messages/room`, {
        roomChat_id: roomChat_id,
    }, { headers }).then((res: AxiosResponse<any>) => {
        if (res.data.data) {
            dispatch({
                type: ACTION_TYPES.SET_LIST_MESSAGES,
                payload: {
                    messages: res.data.data,
                    isLoading: false
                },
            });
        }
        else {
            dispatch({
                type: ACTION_TYPES.SET_MESSAGES_ERROR,
                payload: {
                    errorMessage: 'lấy dữ liệu thất bại',
                    isLoading: false
                },
            });
        }
    })
}

