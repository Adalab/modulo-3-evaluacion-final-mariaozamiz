import React from 'react';
import logo from '../../images/rick-and-morty-logo.png';
import './header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img
                    className="logo"
                    src={logo}
                    alt="rick and morty logo"
                ></img>
            </div>
        </header>
    );
}

export default Header;
