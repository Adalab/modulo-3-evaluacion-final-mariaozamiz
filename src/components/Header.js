import React from 'react';
import headerLogo from '../images/rick-and-morty-logo.png';

function Header() {
    return (
        <header className="header">
            Soy una cabecera
            <div className="header-logo">
                <img
                    className="logo"
                    src={headerLogo}
                    alt="rick and morty logo"
                ></img>
            </div>
            <form>
                <label forHtml="search-input">
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
