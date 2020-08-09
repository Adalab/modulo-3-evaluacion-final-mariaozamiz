import React from 'react';
import { Link } from 'react-router-dom';
import close from '../images/window-close-solid.svg';
import '../stylesheets/characterDetail.scss';

function CharacterNotFound(props) {
    return (
        <div className="modal">
            <div className="modal__dialog">
                <div className="modal__button">
                    <Link to="/">
                        <img
                            className="modal__button-close"
                            src={close}
                            alt="close icon"
                        ></img>
                    </Link>
                </div>
                <div className="modal__content">
                    <h1>Character not found</h1>
                </div>
            </div>
            <div className="modal__overlay"></div>
        </div>
    );
}

export default CharacterNotFound;
