import React from 'react';
import { FaBriefcase, FaHome } from 'react-icons/fa';
import { FiChevronDown, FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { NavData1, NavData2, NavData3 } from '../Utils';
import SideNavComponent from './SideNavComponen';
import "../Styles/Components/SideNav.scss";


const SideNav = () => {
  const[openNav, setOpenNav] = React.useState<boolean>(false);
  return (
    <div className={openNav ? "sideNav sidenav_open" :  "sideNav"}>
       <ul className='side_nav'>
        <li>
        <span className="icon"><FaBriefcase/> </span>
        <span className="title">Switch Organization <FiChevronDown/> </span> 
        </li>
        <li>
          <span className="icon"><FaHome/></span> 
          <span className="title">Dashboard</span>
          </li>
       </ul>

    <SideNavComponent title={NavData1.title} lists={NavData1.lists}/> 

    <SideNavComponent title={NavData2.title} lists={NavData2.lists}/> 
   

    <SideNavComponent title={NavData3.title} lists={NavData3.lists}/> 

<div className={openNav ? "toggle toggle_move" : "toggle"} onClick={() => setOpenNav(prev => !prev)}>
    {openNav ? (
      <FiChevronLeft/>
    ): (<FiChevronRight/>)}
</div>
    </div>

  )
}

export default SideNav