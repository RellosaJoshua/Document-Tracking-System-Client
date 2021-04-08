import React, { useState } from 'react';
import wmsulogo from '../assets/images/wmsulogo.png';
import { login } from '../context/auth/auth.action';
import { useAuthState, useAuthDispatch } from '../context/auth/AuthContext';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { err, isLoading} = useAuthState();
    const dispatch = useAuthDispatch();

    const onChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        if(name === 'username') {
            setUsername(value);
        } else if(name === 'password') {
            setPassword(value);
        }

    }

    const handleLogin = e => {
        e.preventDefault();

        const credentials = {
            username,
            password
        }

        login(credentials, dispatch);
    }

    return (
        <div className="login">
            <form className="login-form" onSubmit={handleLogin}>
                <img className="login-form-logo" src={wmsulogo} alt="wmsu logo...." onClick={() => history.push('/')} />
                <font>Wmsu Docs</font>
                <div className="login-inputs">
                    <input placeholder="Username/Email" type="text" name="username" value={username} onChange={onChange} required/>
                    <input placeholder="Password" type="password" name="password" value={password} onChange={onChange}  required/>
                    <input type="submit" id={isLoading ? "logging-in" : ""} value={isLoading ? "Logging in..." : "Log in"} name="login" disabled={isLoading ?  true : false} />
                </div>
                { err && <span className="login-err-message">{err}</span> }
            </form>
            <div className="org-link">
                <a href="http://wmsu.edu.ph/">Wmsu</a>
                <a href="https://wmsuics.tech/">ICS</a>
            </div>
        </div>
    );
}

export default Login;