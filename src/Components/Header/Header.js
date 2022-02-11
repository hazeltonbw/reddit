import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/reddit-logo.png';

export function Header() {
    return (
        <div className='Header'>
            <header>
                <Link className="main-link" to="/"><img src={logo} alt="some logo"> 
                </img>
                <h1>reddit minimal</h1>
                </Link>
            </header>
        </div>
    );
}
