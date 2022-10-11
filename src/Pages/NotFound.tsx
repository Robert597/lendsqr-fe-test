import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Components/NotFound.scss";

const NotFound = () => {

    return (
        <div className="not_found">
            <h1>404</h1>
            <p>The Page you looking for on lendsqr Not found.</p>
            <p>Please click on this <Link to="/users">Link</Link> to navigate to home page.</p>
        </div>
    )
}

export default NotFound;