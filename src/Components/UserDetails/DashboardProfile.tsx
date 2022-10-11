import React from 'react'
import { useDataProvider } from '../../Context/UserContext';

const DashboardProfile = () => {
const {userDetail} = useDataProvider();
  return (
    <ul>
    <li>
      <p>Full Name</p>
      <p>{`${userDetail?.profile?.firstName} ${userDetail?.profile?.lastName}`}</p>
    </li>

    <li>
      <p>Phone Number</p>
      <p>{userDetail?.profile?.phoneNumber}</p>
    </li>

    <li>
      <p>Email Address</p>
      <p>{userDetail?.email}</p>
    </li>

    <li>
      <p>BVN</p>
      <p>{userDetail?.profile?.bvn}</p>
    </li>

    <li>
      <p>Gender</p>
      <p>{userDetail?.profile?.gender}</p>
    </li>

    <li>
      <p>Marital Status</p>
      <p>single</p>
    </li>

    <li>
      <p>Children</p>
      <p>None</p>
    </li>

    <li>
      <p>Type of Residence</p>
      <p>Parent's Apartment</p>
    </li>
  </ul>
  )
}

export default DashboardProfile