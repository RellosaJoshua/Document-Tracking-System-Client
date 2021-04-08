import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AdminNav = () => {

    const [route, setRoute] = useState(window.location.pathname);
    const history = useHistory();

    const navData = [
        {
            name: 'Dashboard',
            route: '/'
        },
        {
            name: 'Users',
            route: '/users'
        },
        {
            name: 'Requests', 
            route: '/requests'
        },
        {
            name: 'Documents',
            route: '/documents'
        },
        {
            name: 'Archive',
            route: '/archive'
        }
    ]

    return (
        <div className="admin-nav-wrapper">
            <div className="admin-nav width-restriction">
                <ul className="admin-routes-">
                   {
                       navData.map((val, index) => {
                            return <li id={val.route === route ? "active" : ""} className="route" key={index} onClick={() => {
                                history.push(val.route);
                                setRoute(window.location.pathname);
                            }}>
                                {val.name}
                            </li>
                        })
                   }
                </ul>
            </div>
        </div>
    );
};

export default AdminNav;