import React from 'react';
import { DetailInterfaceProps } from '../Props';
import "../Styles/Components/dashboardDetail.scss";


const DashboardDetail = ({details}: DetailInterfaceProps) => {
  return (
    <div className='detail_box'>
      <span className={details?.iconClassName}>
        <details.icon />
        </span>
        <h4>{details.title}</h4>
        <p>{details.figure}</p>
    </div>
  )
}

export default DashboardDetail;