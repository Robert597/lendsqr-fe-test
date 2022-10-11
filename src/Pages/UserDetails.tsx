import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import DetailDashboard from '../Components/UserDetails/DetailDashboard';
import DetailTop from '../Components/UserDetails/DetailTop';
import Header from '../Components/Header/Header';
import SideNav from '../Components/SideNav/SideNav';
import {Link, useNavigate} from "react-router-dom";
import "../Styles/Pages/userDetail.scss";
import { useDataProvider } from '../Context/UserContext';
import { UserData } from '../Props';

const UserDetails = () => {
    const navigate = useNavigate();
    const {userDetail}  = useDataProvider();
    
    
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
        
          {
          //check if user detail is empty or not
          Object.entries(userDetail as UserData).length ? (
            <>
        <DetailTop/>
        <DetailDashboard/>
        </>
         ) : (
          <div className='no_user'> 
            <p>No User was selected from the users page</p>
            <p>Click <Link to="/users">Here</Link> to go and select a user on the user's page, Thank You.</p>
          </div>
        )
}
        </div>
         
      </div>
      </div>
  )
}

export default UserDetails;