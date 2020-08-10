import React from 'react';
import { Link } from 'react-router-dom';
import close from '../images/window-close-solid.svg';
import '../stylesheets/layout/characterNotFound.scss';

function CharacterNotFound(props) {
    return (
        <div className="modalnf">
            <div className="modalnf__dialog">
                <div className="modalnf__button">
                    <Link to="/">
                        <img
                            className="modalnf__button-close"
                            src={close}
                            alt="close icon"
                        ></img>
                    </Link>
                </div>
                <div className="modalnf__content">
                    <h1>Character not found</h1>
                </div>
            </div>
            <div className="modalnf__overlay"></div>
        </div>
    );
}

export default CharacterNotFound;
