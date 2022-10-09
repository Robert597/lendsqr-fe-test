import React from 'react';
import { useDataProvider } from '../Context/UserContext';
import "../Styles/Components/filterModal.scss";

const FilterModal = ({offset}: {offset: number}) => {
    const {data} = useDataProvider();
    let boxWidth = 180;

  return (
    <div className="filterModal" style={{left: `${ offset  * boxWidth}px`}}>
        <div className={"filterInputContainer"}>
            <label htmlFor="organization">Organization</label>
            <select name="organization" id="organization">
                {data?.map((data, index) => (
                    <option value={data?.orgName} key={index}>{data?.orgName}</option>
                ))}
            </select>
        </div>

        <div className={"filterInputContainer"}>
            <label htmlFor='username'>Username</label>
            <input placeholder='User' name="username" type="text"/>
        </div>

        <div className={"filterInputContainer"}>
            <label htmlFor='Email'>Email</label>
            <input placeholder='Email' name="username" type="text"/>
        </div>

        <div className={"filterInputContainer"}>
            <label htmlFor='Date'>Date</label>
            <input placeholder='Date' name="Date" type="date"/>
        </div>

        
        <div className={"filterInputContainer"}>
            <label htmlFor='Phone'>Phone Number</label>
            <input placeholder='Phone Number' name="Phone" type="text"/>
        </div>

        <div className={"filterInputContainer"}>
            <label htmlFor='Status'>Status</label>
           <select name="Status" placeholder='Select'>
            {
                    ["active", "Inactive", "blacklisted", "Pending"].map((status, index) => (
                        <option value={status} key={index}>{status}</option>
                    ))
            }
           </select>
        </div>

            <div className="filterButtons">
                <button>Reset</button>
                <button>Filter</button>
            </div>
    </div>
  )
}

export default FilterModal