import React from 'react';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import {Routes, Route} from "react-router-dom";
import UserDetails from './Pages/UserDetails';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/users" element={ <Dashboard/>} />
        <Route path="/user/:id" element={ <UserDetails/>} />
        <Route path="*" element={ <NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
