import React  from 'react'
import { List } from '../../Props';
import { useLocation } from 'react-router-dom';


const SideNavComponent = ({title, lists}: List ) => {
  const location = useLocation();

  //destructuring pathname from location to get active link
  const {pathname} = location;

  //javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <ul className="main_nav">
        <p>{title}</p>
    {
        lists?.map((list, index) => (
            <li className={splitLocation[1] === list.name ? "active" : "not-active"}key={index}>
              <span className="icon"><list.icon/></span> 
              <span className="title">{list.name}</span> 
              </li>
              
        ))
    }
    </ul>
  )
};

export default SideNavComponent;