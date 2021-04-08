import React, { createContext, useContext, useReducer } from 'react';
import { authInitialState, authReducer } from './auth.reducer';

const AuthStateContext = createContext(null);
const AuthDispatchContext = createContext(null);

export const useAuthState = () => {
    const context = useContext(AuthStateContext);

    if(context === undefined) {
        throw new Error('useAuthState must be used within a AuthContextProvider');
    }

    return context;
}

export const useAuthDispatch = () => {
    const context = useContext(AuthDispatchContext);

    if(context === undefined) {
        throw new Error('useAuthDipatch must be used within a AuthContextProvider');
    }

    return context;
}

export const AuthContextProvider = props => {
    const [user, dispatch] = useReducer(authReducer, authInitialState);

    return(
        <AuthStateContext.Provider value={user}>
            <AuthDispatchContext.Provider value={dispatch}>
                {props.children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
}