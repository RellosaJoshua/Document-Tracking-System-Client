import React from 'react';
import wmsulogo from '../../assets/images/wmsulogo.png'
import { useAuthDispatch } from '../../context/auth/AuthContext';
import { logout } from '../../context/auth/auth.action';
import { useHistory } from 'react-router-dom';


const Header = () => {

    const history = useHistory();
    const dispatch = useAuthDispatch();

    const handleJumpSearch = e => {
        e.preventDefault();
    }

    const handleLogout = e => {
        e.preventDefault();
        logout(dispatch);
        history.push('/');
    }


    return(
        <header className="admin-header-wrapper">
            <div className="admin-header width-restriction">
                <div className="admin-header-logo">
                    <img src={wmsulogo} alt="wmsu logo...." onClick={() => history.push('/')} />
                </div>

                <form className="jump-search">
                    <input type="search" placeholder="Jump to Users, Requests, Documents..." />
                </form>

                <div className="admin-logout">
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </header>
    );
}


export default Header;