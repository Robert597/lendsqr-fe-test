import React from 'react';
import { useDataProvider } from '../../Context/UserContext';
import {useNavigate} from 'react-router-dom';
import TableMenuModal from './TableMenuModal';
import {BiFilter} from "react-icons/bi";
import { TableMenuProps } from '../../Props/index';

const TableRow = ({data, setShowModal, setOffset} : TableMenuProps) =>  {
    const navigate = useNavigate();
    const {getDetail} = useDataProvider();
    //list of various statuses
    const status = ["active", "inactive", "pending", "blacklisted"]; 

//set a random status to user
    const [userStatus, setUserStatus] = React.useState(status[Math.floor(Math.random() * (status.length))]);

    //changing date format to a more readable format
let createdDate = new Date(data?.createdAt as string ).toLocaleDateString('en-US', {month: "short", day: "numeric", year: "numeric"});

let createdTime = new Date(data?.createdAt as string).toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'});

    return (
        <tr onDoubleClick={() => {getDetail?.(data?.id as string);
            navigate(`/user/${data?.id}`)}}>
                <div className="tableIcons">
                    <BiFilter 
                    style={{cursor: "pointer"}}
                   onClick={() => {
                    setShowModal(prev => !prev);
                    setOffset(0);
                   }}/>

                <TableMenuModal id={data?.id as string} setUserStatus={setUserStatus}/>
                </div>
                <td data-label="Organization">{data?.orgName}</td>
                <td data-label="UserName">{data?.userName}</td>
                <td data-label="Email">{data?.email}</td>
                <td data-label="Phone Number">{data?.phoneNumber}</td>
                <td data-label="Date">{createdDate} {createdTime}</td>
                <td data-label="status">
                    <span className={userStatus}>{userStatus}</span></td>
                <td className="tableIcon">
                    <TableMenuModal id={data?.id as string} setUserStatus={setUserStatus}/>
                </td>
              
            </tr>
    )
}

export default TableRow;