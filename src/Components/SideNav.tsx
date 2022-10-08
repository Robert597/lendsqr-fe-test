import React from 'react';
import { FaBriefcase, FaHome } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { NavData1, NavData2, NavData3 } from '../Utils';
import SideNavComponent from './SideNavComponen';
import "../Styles/Components/SideNav.scss";


const SideNav = () => {
  return (
    <div className="sideNav">
       <ul className='side_nav'>
        <li><FaBriefcase/> Switch Organization <FiChevronDown/>
        </li>
        <li><FaHome/> Dashboard</li>
       </ul>

    <SideNavComponent title={NavData1.title} lists={NavData1.lists}/> 

    <SideNavComponent title={NavData2.title} lists={NavData2.lists}/> 
   

    <SideNavComponent title={NavData3.title} lists={NavData3.lists}/> 
    </div>
  )
}

export default SideNav