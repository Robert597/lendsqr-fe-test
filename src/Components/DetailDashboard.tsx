import React from 'react'
import { useDataProvider } from '../Context/UserContext';
import useState from 'react';
import DashboardProfile from './DashboardProfile';
import DashboardEducation from './DashboardEducation';
import DashboardSocial from './DashboardSocial';
import DashboardGuarantor from './DashboardGuarantor';

const DetailDashboard = () => {
   const {userDetail, state} = useDataProvider();
   
   const Navigators = ["General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"];
  
  return (
    <div>
        {
          state === "General Details" && (
            <div>
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
            <div>
            <h1>Education and Employment</h1>
             <DashboardEducation/>
            </div>
          )
        }
        {
          state === "Bank Details" && (
            <div>
            <h1>Personal Information</h1>
           <DashboardProfile/>
          </div>
          )
        }
        {
          state === "Loans" && (
            <div>
            <h1>Personal Information</h1>
           <DashboardProfile/>
          </div>
          )
        }
        {
          state === "Savings" && (
            <div>
            <h1>Personal Information</h1>
           <DashboardProfile/>
          </div>
          )
        }
        {
          state === "App and System" && (
            <div>
            <h1>Personal Information</h1>
           <DashboardProfile/>
          </div>
          )
        }
    </div>
  )
}

export default DetailDashboard