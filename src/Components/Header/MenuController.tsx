import React from 'react';
import {FaTimes, FaRegBell} from "react-icons/fa";
import {FiMenu} from "react-icons/fi";
import { MdArrowDropDown } from 'react-icons/md';
import User from "../../Assets/user.png";
import "../../Styles/Components/menuController.scss";
import { useDataProvider } from '../../Context/UserContext';

const MenuController = () => {
    const[showMenuModal, setShowMenuModal] = React.useState<boolean>(false);

    const{auth} = useDataProvider();
  return (
    <div className="menu">

    <div className="MenuController"  onClick={() => setShowMenuModal(prev => !prev)}>
      {showMenuModal ? (
         <FaTimes/>
      ): <FiMenu/>}
    </div>
 
   
   <div className={showMenuModal ? " showchild modal" : "absoluteChild modal"}>
        <div className="flex">
        <a href="#" target="_blank" rel="no-referrer">Docs</a>
            
            <FaRegBell/>
        </div>
<hr/>

    <div className="flex">
     <div className="avatar">
            <img src={User} alt="User Profile avatar"/>
            </div>

            <div className="avatar_name">
                <p>{auth?.username ? auth?.username : "adedeji"}</p>
                <MdArrowDropDown/>
            </div>
            </div>
        </div>

  </div>


  )
}

export default MenuController