import axios from 'axios';
import {
    ADD_USER,
    ADD_USER_ERR,
    ADD_USER_SUCCESS
} from './user.actionTypes';

export const addDepartmentUser = async(newUserInfo, dispatch) => {
    const accessToken = localStorage.getItem('accessToken');

    try {
        dispatch({type: ADD_USER});
        
        const res = await axios.post('api/admin/department-user', newUserInfo, {
            headers: {'x-access-token' : accessToken}
        });

        if(res.data.sucess) {
            dispatch({ type: ADD_USER_SUCCESS, payload: {
                user: res.data.result
            } });
        }

    } catch(err) {
        dispatch({type: ADD_USER_ERR, err: err.response.data.message});
    }

}

export const addOfficeUser = async(newUserInfo, dispatch) => {
    const accessToken = localStorage.getItem('accessToken');

    try {
        dispatch({type: ADD_USER});
        
        const res = await axios.post('api/admin/office-user', newUserInfo, {
            headers: {'x-access-token' : accessToken}
        });

        if(res.data.sucess) {
            dispatch({ type: ADD_USER_SUCCESS, payload: {
                user: res.data.result
            } });
        }

    } catch(err) {
        dispatch({type: ADD_USER_ERR, err: err.response.data.message});
    }

}


export const addAdministrativeUser = async(newUserInfo, dispatch) => {
    const accessToken = localStorage.getItem('accessToken');

    try {
        dispatch({type: ADD_USER});
        
        const res = await axios.post('api/admin/administrative-user', newUserInfo, {
            headers: {'x-access-token' : accessToken}
        });

        if(res.data.sucess) {
            dispatch({ type: ADD_USER_SUCCESS, payload: {
                user: res.data.result
            } });
        }

    } catch(err) {
        dispatch({type: ADD_USER_ERR, err: err.response.data.message});
    }

}
