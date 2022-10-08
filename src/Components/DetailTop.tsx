import React from 'react';
import { useDataProvider } from '../Context/UserContext';
import StarRating from './StarRating';

const DetailTop = () => {
    const {userDetail, setState} = useDataProvider();
    const Navigators = ["General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"];
  return (
    <div>
     <div className="detailTop">
        <div className="avatarContainer">
            <img src={userDetail?.profile?.avatar} alt="avatar"/>

            <div className="avatarDetails">
                <h1>{`${userDetail?.profile?.firstName} ${userDetail?.profile?.lastName}`}</h1>
                <p>{userDetail?.id}</p>
            </div>
        </div>

        <div className="starComponent">
            <p>User's Tier</p>
            <StarRating starVal={2}/>
        </div>

        <div className="bankDetails">
            <h1>{userDetail?.accountBalance}</h1>
            <p>{userDetail?.accountNumber}/Providus Bank</p>
        </div>
    </div>

    <ul className={"detailNavigate"}>
        {Navigators.map((item, index) => (
            <li onClick={() => setState?.(item)} key={index}>{item}</li>
        ))}
    </ul>
    </div>
  )
}

export default DetailTop;