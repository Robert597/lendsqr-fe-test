import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContextProvider } from './Context/UserContext';
import {BrowserRouter as Router} from 'react-router-dom';
import "./Styles/index.scss";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <UserContextProvider>
  <Router>
    <App />
  </Router>
  </UserContextProvider>
  </React.StrictMode>
);


