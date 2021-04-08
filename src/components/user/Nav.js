import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import wmsulogo from '../../assets/images/wmsulogo.png'
import { ReactComponent as DashboardIcon } from '../../assets/icons/dashboard.svg';
import { ReactComponent as RequestIcon } from '../../assets/icons/request.svg';
import { ReactComponent as DocumentIcon } from '../../assets/icons/document.svg';
import { ReactComponent as ArchiveIcon } from '../../assets/icons/archive.svg';


const Nav = () => {

    const [route, setRoute] = useState(window.location.pathname);
    const history = useHistory();


    const navData = [
        {
            name: 'Dashboard',
            route: '/',
            icon: <DashboardIcon />
        },
        {
            name: 'Requests',
            route: '/requests',
            icon: <RequestIcon />
        },
        {
            name: 'Documents',
            route: '/documents',
            icon: <DocumentIcon />
        },
        {
            name: 'Archive',
            route: '/archive',
            icon: <ArchiveIcon />
        }
    ]

    return (
        <div className="user-nav-wrapper">
            <nav className="width-restriction">
               <div className="logo" onClick={() => history.push('/')} ><img src={wmsulogo} alt="wmsu logo...." /> Wmsu Docs</div>
               <div className="user-routes-options">
               <ul className="user-routes">
                    {
                        navData.map((val, index) => {
                            return <li key="index" id={val.route === route ? "active" : ""}  onClick={() => {
                                history.push(val.route);
                                setRoute(window.location.pathname);
                            }}>
                                {val.icon}
                                {val.name}
                            </li>
                        })
                    }
                    </ul>
                    <button>Logout</button>

               </div>
              
            </nav>
        </div>
    );
}

export default Nav;