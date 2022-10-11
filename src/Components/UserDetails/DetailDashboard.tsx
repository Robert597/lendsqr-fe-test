import React from 'react'
import { useDataProvider } from '../../Context/UserContext';
import DashboardProfile from './DashboardProfile';
import DashboardEducation from './DashboardEducation';
import DashboardSocial from './DashboardSocial';
import DashboardGuarantor from './DashboardGuarantor';
import "../../Styles/Components/detailDashboard.scss";

const DetailDashboard = () => {
   const { state} = useDataProvider();
  
   //state is used to monitor which navigation link we are on
  
  return (
    <div className="detail_dashboard">
        {
          state === "General Details" && (
            <div className='detail_dashboard_component'>
            <div>
              <h1>Personal Information</h1>
             <DashboardProfile/>
            </div>

            <div className="edu&employ">
              <h1>Education and Employment</h1>
             <DashboardEducation/>
            </div>

            <div className="socialsProfile">
              <h1> Socials </h1>
            <DashboardSocial/>
            </div>

            <div className="guarantor">
              <h1>Guarantor</h1>
              <DashboardGuarantor/>
            </div>
            </div>
          )
        }
        {
          state === "Documents" && (
            <div className="detail_dashboard_component">
            <div>
            <h1>Education and Employment</h1>
             <DashboardEducation/>
            </div>
            </div>
          )
        }
        {
          state === "Bank Details" && (
            <div className="detail_dashboard_component">
            <div>
            <h1>Personal Information</h1>
           <DashboardProfile/>
          </div>
          </div>
          )
        }
        {
          state === "Loans" && (
            <div className="detail_dashboard_component">
            <div>
            <h1>Personal Information</h1>
           <DashboardProfile/>
          </div>
          </div>
          )
        }
        {
          state === "Savings" && (
            <div className="detail_dashboard_component">
            <div>
            <h1>Personal Information</h1>
           <DashboardProfile/>
          </div>
          </div>
          )
        }
        {
          state === "App and System" && (
            <div className="detail_dashboard_component">
            <div>
            <h1>Personal Information</h1>
           <DashboardProfile/>
          </div>
          </div>
          )
        }
    </div>
  )
}

export default DetailDashboard