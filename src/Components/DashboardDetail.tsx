import React from 'react';
import { DetailInterfaceProps } from '../Props';


const DashboardDetail = ({details}: DetailInterfaceProps) => {
  return (
    <div>
        <details.icon className={details?.iconClassName}/>
        <p>{details.title}</p>
        <p>{details.figure}</p>
    </div>
  )
}

export default DashboardDetail;