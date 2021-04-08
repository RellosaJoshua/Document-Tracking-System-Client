import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/css/main.css';
import { AuthContextProvider } from './context/auth/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

