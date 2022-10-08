import React from 'react';
import Logo from "../Assets/logo.svg";
import User from "../Assets/user.png";
import { FaSearch, FaRegBell} from "react-icons/fa";
import {MdArrowDropDown} from "react-icons/md";
import "../Styles/Components/header.scss";

const Header = () => {
  return (
    <div className={"navbar"}>
          <div className="navbar_logo">
            <img src={Logo} alt={"HeaderLogo"}/>
        </div>

        <div className="nav_search">
            <input type="text" placeholder="Search for anything"/>
            <button><FaSearch/></button>
        </div>

        <div className='nav_info'>

            <a href="#" target="_blank" rel="no-referrer">Docs</a>
            
            <FaRegBell/>

            <div className="avatar">
            <img src={User} alt="User Profile Photo"/>
            </div>

            <div className="avatar_name">
                <p>Adedeji</p>
                <MdArrowDropDown/>
            </div>
        </div>

    </div>
  )
}

export default Header