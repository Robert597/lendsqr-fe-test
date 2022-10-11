import React from 'react'
import {BiFilter} from "react-icons/bi";
import { useDataProvider } from '../Context/UserContext';
import "../Styles/Components/dashboardTable.scss";
import TableRow from "./TableRow";




const DashboardTable = ({setShowModal, setOffset, offset, showModal}: {setShowModal: React.Dispatch<React.SetStateAction<boolean>>, setOffset: React.Dispatch<React.SetStateAction<number>>, offset: number, showModal: boolean}) => {
    const {paginatedData} = useDataProvider();

    //status wasnt provided in the Api, adding it dynamically
   

    //table header Data
    const thead = ["Organization", "Username", "Email", "Phone Number", "Date Joined", "Status"]

    //function for moving and closing filter modal
    const moveModal = (index: number) => {
        if(offset === index){
            setShowModal(prev => !prev);
        } else if(showModal){
            setOffset(index);
        }else{
            setShowModal(prev => !prev);
            setOffset(index);
        }
    }

  return (
    <table className='table'>
        <thead>
            <tr>
            {
                thead.map((item, index) => (
                    <th key={index}>{item} <BiFilter 
                    style={{cursor: "pointer"}}
                   onClick={() => {
                   moveModal(index);
                   }}/></th>
                ))
            }
            </tr>
        </thead>
        <tbody>
            {paginatedData?.map((data, index)  => {
                
                return (
                <TableRow data={data} setShowModal={setShowModal}
                setOffset={setOffset}/>
            )})}
        </tbody>
    </table>
  )
}

export default DashboardTable;