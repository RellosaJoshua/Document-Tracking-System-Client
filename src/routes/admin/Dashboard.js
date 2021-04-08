import React from 'react';
import { useAuthState } from '../../context/auth/AuthContext';

const Dashboard = () => {
    const { user } = useAuthState();

    return (
        <div className="admin-dashboard">
          
        </div>
    );
}

export default Dashboard;