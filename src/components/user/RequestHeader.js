import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/search_icon.svg';
import { ReactComponent as RequestIcon } from '../../assets/icons/request.svg';
import { useHistory } from 'react-router-dom';


const RequestHeader = () => {
    const history = useHistory();

    return(
        <div className="request-header-wrapper">
            <header className="width-restriction">
                <div className="left">
                    <label>
                        Browse Your Requests
                    </label>
                    <form>
                        <SearchIcon />
                        <input type="search" placeholder="Filter Requests"/>
                    </form>
                </div>
                <div className="right">
                    <button onClick={() => history.push('/requests/new')}><RequestIcon/> Make a New Request</button>
                </div>
            </header>
        </div>
    );
}

export default RequestHeader;