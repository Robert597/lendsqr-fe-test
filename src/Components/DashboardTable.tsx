import React from 'react'
import {BiFilter} from "react-icons/bi";
import { useDataProvider } from '../Context/UserContext';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import {useNavigate} from 'react-router-dom';


const DashboardTable = ({setShowModal, setOffset}: {setShowModal: React.Dispatch<React.SetStateAction<boolean>>, setOffset: React.Dispatch<React.SetStateAction<number>>}) => {
    const {paginatedData, getDetail} = useDataProvider();
    const status = ["active", "inactive", "pending", "blacklisted"];

    const navigate = useNavigate();
  return (
    <table>
        <thead>
            <tr>
            <th>Organization <BiFilter onClick={() => {
                setOffset(0);
                setShowModal((prev) => !prev)
            }}/></th>
            <th>Username <BiFilter 
            onClick={() => {
                setOffset(1);
                setShowModal((prev) => !prev)
            }}/></th>
            <th>Email <BiFilter
            onClick={() => {
                setOffset(2);
                setShowModal((prev) => !prev)
            }}/></th>
            <th>Phone Number <BiFilter
            onClick={() => {
                setOffset(3);
                setShowModal((prev) => !prev)
            }}/></th>
            <th>Date Joined <BiFilter 
            onClick={() => {
                setOffset(4);
                setShowModal((prev) => !prev)
            }}/></th>
            <th>Status <BiFilter onClick={() => {
                setOffset(5);
                setShowModal((prev) => !prev)
            }}/></th>
            </tr>
        </thead>
        <tbody>
            {paginatedData?.map((data, index)  => (
                <tr key={index} onClick={() => {getDetail?.(data?.id as string);
                navigate(`/user/${data?.id}`)}}>
                    <td>{data?.orgName}</td>
                    <td>{data?.userName}</td>
                    <td>{data?.email}</td>
                    <td>{data?.phoneNumber}</td>
                    <td>{new Date(data?.createdAt as string ).toLocaleDateString('en-US', {month: "short", day: "numeric", year: "numeric"})} {new Date(data?.createdAt as string).toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'})}</td>
                    <td>{status[Math.floor(Math.random() * (status.length))]}</td>
                    <HiOutlineDotsVertical/>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default DashboardTable;