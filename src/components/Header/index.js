import React from 'react';
import './Header.css';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import Profile from '../../view/images/profile.jpg'


export default ({black}) => {

    const dispatch = useDispatch();

    return(
        <header className={black ? 'black' : ''}>
           <div className="header--logo">
            
                <a href="/home">
                    <Tooltip title="Change profile" aria-label="Change profile">
                        <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-1-1.png" alt="Netflix"/>
                    </Tooltip>
                </a>
            
           </div>
           <div className="header--user">
                <Link onClick={() => dispatch({type: 'LOG_OUT'})} to="/">
                    <Tooltip title="Logout" aria-label="Logout">
                        <img src={Profile} alt="Usuario"/>
                    </Tooltip>
                </Link>
           </div>
        </header>  
    );
}