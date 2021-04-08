import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';


const NewRequest = () => {

    const history = useHistory();

    const backArrow = "<<"

    return(
        <div className="new-request-header">
            <header className="width-restriction">
                <div className="left">
                    <label>
                        New Request
                    </label>
                    <form className="new-request-form">
                    <select placeholder="Field" name="field"  required>
                        <option disabled selected>Field</option>
                        <option>Academic</option>
                        <option>Office</option>
                        <option>Administrative</option>
                    </select>
                    <input type="text" placeholder="title" name="title" />
                    <input type="text" placeholder="purpose" name="purpose" />
                    <textarea type="message" placeholder="Message" name="message" />

                    </form>
                </div>
                <div className="right">
                    <button className="back-btn" onClick={() => history.push("/requests")}>{backArrow}&nbsp;Back</button>
                </div>
            </header>   
        </div>
    );
}

export default NewRequest;