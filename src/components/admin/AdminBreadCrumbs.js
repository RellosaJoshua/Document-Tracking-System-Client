import React, {useState} from 'react';

const AdminBreadCrumbs = () => {
    const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

    return(
        <div className="admin-breadcrumbs width-restriction">
            { currentRoute }
        </div>
    );
}

export default AdminBreadCrumbs;