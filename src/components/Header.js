import React from 'react';
import logo from '../images/rick-and-morty-logo.png';
import '../stylesheets/header.scss';

function Header() {
    return (
        <header className="header">
            Soy una cabecera
            <div className="header-logo">
                <img
                    className="logo"
                    src={logo}
                    alt="rick and morty logo"
                ></img>
            </div>
            <form>
                <label htmlFor="search-input">
                    Find a character!
                    <input
                        id="search-input"
                        name="search-input"
                        type="text"
                        placeholder="for example, 'Rick'"
                    ></input>
                </label>
            </form>
        </header>
    );
}

export default Header;
