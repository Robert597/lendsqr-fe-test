import React from 'react';
import SVG from "../Assets/loader.svg"
import "../Styles/Components/loader.scss";

const Loader = () => {
  return (
    <div className="loaderContainer">
        
            <img src={SVG} alt="loader"/>
        
    <p className='loadertext'>Loading...</p>
    </div>
  )
}

export default Loader