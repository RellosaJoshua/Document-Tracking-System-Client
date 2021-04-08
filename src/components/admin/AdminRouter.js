import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ReactComponent as AdminIcon } from '../../assets/icons/admin.svg'
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow_right.svg'
import Dashboard from '../../routes/admin/Dashboard';
import Users from '../../routes/admin/Users';
import Header from './Header';
import AdminBreadCrumbs from './AdminBreadCrumbs';
import AdminNav from './AdminNav';


const AdminRouter = () => {


    return(
        <Router>
            <Header />
            <Switch>
                <div className="admin-main-wrapper">
                    <div className="placeholder">--</div>
                    <AdminNav />
                    <div className="admin-settings-breadcrumb width-restriction">
                        <button><AdminIcon /> Admin Settings</button>
                        <font>&nbsp;&nbsp;&nbsp;<ArrowRightIcon /> </font>
                        {
                            // <AdminBreadCrumbs />
                        }
                    </div>
                    <div className="admin-main width-restriction">
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/users" component={Users} />
                    </div>  
                </div>
            </Switch>
        </Router>
    );
}

export default AdminRouter;