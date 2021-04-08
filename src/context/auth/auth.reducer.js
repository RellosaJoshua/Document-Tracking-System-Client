import {
    INIT,
    IS_AUTH,
    LOG_IN,
    LOG_IN_ERR,
    LOG_IN_SUCCESS,
    LOG_OUT,
} from './auth.actionTypes';

export const authInitialState = {
    user: undefined,
    accessToken: undefined,
    isLoggedIn: false,
    isLoading: false,
    isInit: false,
    err: null,
}

export const authReducer = (initialState, action) => {
    switch(action.type) {
        case INIT:
            return {
                ...initialState,
                isInit: true
            }
        case IS_AUTH:
            return {
                ...initialState,
                user: action.payload.user,
                accessToken: action.payload.accessToken,
                isLoggedIn: true,
                isInit: true,
            }
        case LOG_IN: 
            return {
                ...initialState,
                isLoading: true,
                err: null,
            }
        case LOG_IN_ERR:
            return {
                ...initialState,
                isLoading: false,
                err: action.err
            }
        case LOG_IN_SUCCESS:
            return {
                ...initialState,
                isLoading: false,
                user: action.payload.user,
                accessToken: action.payload.accessToken,
                isLoggedIn: true
            }
        case LOG_OUT:
            return {
                ...initialState,
                user: undefined,
                accessToken: undefined,
                isLoggedIn: false
            }
        default:
            return initialState
    }
}