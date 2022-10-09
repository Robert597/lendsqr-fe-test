import React from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { FaUserCheck, FaUserTimes } from 'react-icons/fa';
import { MdRemoveRedEye } from 'react-icons/md';
import "../Styles/Components/tableMenuModal.scss";
import {useNavigate} from 'react-router-dom';


const TableMenuModal = ({id, setUserStatus}: {id: string, setUserStatus: React.Dispatch<React.SetStateAction<string>>}) => {
const [show, setShow] = React.useState(false);
const navigate = useNavigate();
  return (
    <div className="table_modal">
         <HiOutlineDotsVertical onClick={() => setShow(prev => !prev)}/>
         {show && (
    <ul className="absoluteChild">
            <li onClick={() =>  navigate(`/user/${id}`)}><MdRemoveRedEye/> 
            <span>View Details</span></li>

            <li onClick={() => setUserStatus("blacklisted")}><FaUserTimes/> <span>Blacklist User</span></li>

            <li onClick={() => setUserStatus("active")}><FaUserCheck/> <span>Activate User</span></li>
         </ul>
         )}
    </div>
  )
}

export default TableMenuModal