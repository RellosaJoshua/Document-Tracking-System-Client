import React, { createContext, useContext, useReducer } from 'react';
import { usersInitialState, usersReducer } from './user.reducer';

const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export const useUsersState = () => {
    const context = useContext(UsersStateContext);

    if(context === undefined) {
        throw new Error('useUsersState must be used within a UserContextProvider');
    }

    return context;
}

export const useUsersDispatch = () => {
    const context = useContext(UsersDispatchContext);

    if(context === undefined) {
        throw new Error('useUsersDispatch must be used within a UserContextProvider');
    }

    return context;
}

export const UserContextProvider = props => {
    const [users, dispatch] = useReducer(usersReducer, usersInitialState);

    return(
        <UsersStateContext.Provider value={users}>
            <UsersDispatchContext.Provider value={dispatch}>
                {props.children}
            </UsersDispatchContext.Provider>
        </UsersStateContext.Provider>
    );
}
