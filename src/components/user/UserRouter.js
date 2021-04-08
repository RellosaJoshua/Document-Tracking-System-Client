import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../../routes/user/Dashboard';
import NewRequest from '../../routes/user/NewRequest';
import Request from '../../routes/user/Request';
import Nav from './Nav';


const UserRouter = () => {
    return(
        <Router>
            <Nav />
            <Switch>
                <main className="user-main">
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/requests" component={Request} />
                    <Route path="/requests/new" component={NewRequest} />
                </main>
            </Switch>
        </Router>
    );
}

export default UserRouter;