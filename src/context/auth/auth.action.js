import axios from 'axios';
import {
    INIT,
    IS_AUTH,
    LOG_IN,
    LOG_IN_ERR,
    LOG_IN_SUCCESS,
    LOG_OUT
} from './auth.actionTypes';


export const isAuth = async(dispatch) => {
    const accessToken = localStorage.getItem('accessToken');
    if(!accessToken) {
        dispatch({ type: INIT });
        return;
    }

    const res = await axios.post('api/auth/isauth', null, {
        headers: {'x-access-token' : accessToken}
    });

    if(res.data) {
        const userInfoRes = await axios.get('api/auth/authuser', {
            headers: {'x-access-token': accessToken}
        });

        dispatch({ type: IS_AUTH, payload: {
            user: userInfoRes.data.user,
            accessToken
        } });
    } else {
        dispatch({ type: INIT });
    }
} 

export const login = async(credentialsPayload, dispatch) => {
    try {
        dispatch({ type: LOG_IN });
        const res = await axios.post('api/auth/login', credentialsPayload);

        if(res.data.success) {
            setTimeout(() => {
                dispatch({ type: LOG_IN_SUCCESS, payload: {
                    user: res.data.user,
                    accessToken: res.data.accessToken
                } });
                localStorage.setItem('accessToken', res.data.accessToken);
            }, 1000);

        }

    } catch(err) {
        setTimeout(() => {
            dispatch({ type: LOG_IN_ERR, err: err.response.data.message });
        }, 1000);
    }
}

export const logout = dispatch => {
    dispatch({ type: LOG_OUT });
    localStorage.removeItem('accessToken');
}