import React from 'react'
import { useDataProvider } from '../../Context/UserContext'

const DashboardGuarantor = () => {
    const {userDetail} = useDataProvider();
  return (
    <ul>
    <li>
      <p>Full Name</p>
      <p>{userDetail?.guarantor?.firstName} {userDetail?.guarantor?.lastName}</p>
    </li>

    <li>
      <p>Phone Number</p>
      <p>{userDetail?.guarantor?.firstName} {userDetail?.guarantor?.phoneNumber}</p>
    </li>

    <li>
      <p>Email Address</p>
      <p>{userDetail?.guarantor?.address}</p>
    </li>

    <li>
      <p>Relationship</p>
      <p>Sister</p>
    </li>

  </ul>
  )
}

export default DashboardGuarantor