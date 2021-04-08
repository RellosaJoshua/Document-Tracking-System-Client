import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../routes/Login';
import { useAuthState } from '../context/auth/AuthContext';
import AdminRouter from './admin/AdminRouter';
import UserRouter from './user/UserRouter';
import { UserContextProvider } from '../context/adminUsers/UserContext';

const AppRouter = () => {
    const { isLoggedIn, user } = useAuthState();

    if(isLoggedIn && user.isSystemAdmin) {  
        return <UserContextProvider>
            <AdminRouter />
        </UserContextProvider>
    }

    if(isLoggedIn) {
        return <UserRouter />
    }

    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Login} />
                {}
            </Switch>
        </Router>
    );
}

export default AppRouter;