import React, { useEffect } from 'react';
import AppRouter from './AppRouter';
import axios from 'axios';
import { useAuthState, useAuthDispatch } from '../context/auth/AuthContext';
import { isAuth } from '../context/auth/auth.action';

axios.defaults.baseURL =  'http://localhost:3001/';

function App() {
  const { isInit } = useAuthState();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    isAuth(dispatch);
  },[]);

  return <div>
    {isInit ? <AppRouter /> : "Loading..."}
  </div>
}

export default App;
