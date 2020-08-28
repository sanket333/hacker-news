import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className = "header dark">
            <div className = "container">
                <div className = "nav-logo ">
                   <Link className = "links"to = '/'>Hacker News</Link>
                </div>
                <div className = "nav-links">

                </div>
            </div>
        </div>
    )
}

export default Header;