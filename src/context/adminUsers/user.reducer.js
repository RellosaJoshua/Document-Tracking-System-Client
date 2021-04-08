import {
    ADD_USER,
    ADD_USER_ERR,
    ADD_USER_SUCCESS
} from './user.actionTypes';


export const usersInitialState = {
    users: [],
    err: null,
    isLoading: false,
}

export const usersReducer = (initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            return {
                ...initialState,
                isLoading:true
            }
        case ADD_USER_ERR: 
            return {
                ...initialState,
                err: action.err,
                isLoading: false
            }
        case ADD_USER_SUCCESS:
            return {
                ...initialState,
                users:[action.payload.user, ...initialState.users],
                err: null,
                isLoading: false
            }
    }
}