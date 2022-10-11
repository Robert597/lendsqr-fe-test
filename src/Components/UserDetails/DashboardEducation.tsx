import React from 'react'
import { useDataProvider } from '../../Context/UserContext';

const DashboardEducation = () => {
    const {userDetail} = useDataProvider();
  return (
    <ul>
    <li>
      <p>Level of Education</p>
      <p>{userDetail?.education?.level}</p>
    </li>

    <li>
      <p>Employment Status</p>
      <p>{userDetail?.education?.employmentStatus}</p>
    </li>

    <li>
      <p>Sector Of Employment</p>
      <p>{userDetail?.education?.sector}</p>
    </li>

    <li>
      <p>Duration of Employment</p>
      <p>{userDetail?.education?.duration}</p>
    </li>

    <li>
      <p>Office Email</p>
      <p>{userDetail?.education?.officeEmail}</p>
    </li>

    <li>
      <p>Monthly Income</p>
      <p>{userDetail?.education?.monthlyIncome}</p>
    </li>

    <li>
      <p>Loan Repayment</p>
      <p>{userDetail?.education?.loanRepayment}</p>
    </li>
  </ul>
  )
}

export default DashboardEducation