import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import DetailDashboard from '../Components/DetailDashboard';
import DetailTop from '../Components/DetailTop';
import Header from '../Components/Header';
import SideNav from '../Components/SideNav';
import {useNavigate} from "react-router-dom";
import { useDataProvider } from '../Context/UserContext';
import "../Styles/Pages/userDetail.scss";

const UserDetails = () => {
    const {userDetail} = useDataProvider();
    console.log(userDetail);
    const navigate = useNavigate();
  return (
    <div className="dashboard_details">
      <div className="detail_header">
      <Header/>
      </div>

      <div className="detail_SplitView">
        <div className="detail_SideNav">
        <SideNav/>
        </div>
        <div className="detail_content">

          <div className="detail_top_details">
              <div className="detail_nav" onClick={() => navigate(-1)}>
                <span className='icon'><BsArrowLeft/></span>
                <span className='text'>Back to Users</span>
                </div>

                <div className="detail_info">
                  <h1>User Details</h1>
                  <div className="detail_buttons">
                    <button>Blacklist user</button>
                    <button>Activate User</button>
                  </div>
                </div>
          </div>
        <DetailTop/>
        <DetailDashboard/>
        </div>
      </div>
      </div>
  )
}

export default UserDetails;