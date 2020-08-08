import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/characterDetail.scss';

function CharacterDetail(props) {
    return (
        <div className="modal">
            <div className="modal__dialog">
                <div className="modal__button">
                    <Link to="/">
                        <button className="modal__button-close">x</button>
                    </Link>
                </div>
                <div className="modal__content">
                    <img
                        className="modal__content-image"
                        alt={`${props.character.name}'s pic`}
                        src={props.character.imageUrl}
                    ></img>
                    <ul className="modal__content-list">
                        <li className="modal__list-name">
                            {props.character.name}
                        </li>
                        <li>{`Status: ${props.character.status}`}</li>
                        <li>{`Species: ${props.character.species}`}</li>
                        <li>{`Origin: ${props.character.origin.name}`}</li>
                        <li>{`Episodes: ${props.character.episodes.length}`}</li>
                    </ul>
                </div>
            </div>
            <div className="modal__overlay"></div>
        </div>
    );
}

export default CharacterDetail;
