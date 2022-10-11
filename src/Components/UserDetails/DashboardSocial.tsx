import React from 'react'
import { useDataProvider } from '../../Context/UserContext';

const DashboardSocial = () => {
    const {userDetail} = useDataProvider();
  return (
    <ul>
    <li>
      <p>Twitter</p>
        <p>{userDetail?.socials?.twitter}</p>
      </li>

      <li>
      <p>Facebook</p>
        <p>{userDetail?.socials?.facebook}</p>
      </li>

      <li>
      <p>Instagram</p>
        <p>{userDetail?.socials?.instagram}</p>
      </li>
    </ul>
  )
}

export default DashboardSocial;