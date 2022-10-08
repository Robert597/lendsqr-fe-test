import React  from 'react'
import { List } from '../Props';


const SideNavComponent = ({title, lists}: List ) => {
  return (
    <ul className="main_nav">
        <p>{title}</p>
    {
        lists?.map((list) => (
            <li> <list.icon/> {list.name}</li>
        ))
    }
    </ul>
  )
};

export default SideNavComponent;