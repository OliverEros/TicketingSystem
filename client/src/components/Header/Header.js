import React from 'react';
import '../Header/Header.css';
import {Link} from 'react-router-dom'
import '/home/oliver/Ticketing System/client/src/index.css'




function Header() {
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex flex-row-reverse ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseButtonContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
             </button>
             
            <div className="row col-12 d-flex flex-row-reverse justify-content-center text-white">
                <div className="collapse navbar-collapse" id="collapseButtonContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/register" className="linkItems">Register</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/login" className="linkItems">Login</Link>
                        </li>
                    </ul>       
                </div>
                </div>     
        </nav>
        
        </div>
    )
}

export default Header;