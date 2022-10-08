import React from 'react';
import DetailDashboard from '../Components/DetailDashboard';
import DetailTop from '../Components/DetailTop';
import Header from '../Components/Header';
import SideNav from '../Components/SideNav';
import { useDataProvider } from '../Context/UserContext';

const UserDetails = () => {
    const {userDetail} = useDataProvider();
  return (
    <div>
        <DetailTop/>
        <DetailDashboard/>
        <Header/>
        <SideNav/>
    </div>
  )
}

export default UserDetails;