import React from 'react';
import { useDataProvider } from '../../Context/UserContext';
import "../../Styles/Components/detailTop.scss";
import StarRating from './StarRating';

const DetailTop = () => {
    const {userDetail, setState, state} = useDataProvider();

    //Navigators to navigate user details dashboard
    const Navigators = ["General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"];
  return (
    <div className="detail_component_top">
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
            <h1>&#8358; {userDetail?.accountBalance}</h1>
            <p>{userDetail?.accountNumber}/Providus Bank</p>
        </div>
    </div>

    <ul className={"detailNavigate"}>
        {Navigators.map((item, index) => (
            <li onClick={() => setState?.(item)} key={index} className={state === item ? "active" : "not-active"}>{item}</li>
        ))}
    </ul>
    </div>
  )
}

export default DetailTop;