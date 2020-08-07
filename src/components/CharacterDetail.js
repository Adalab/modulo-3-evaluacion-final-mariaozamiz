import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/characterDetail.scss';

function CharacterDetail(props) {
    return (
        <div className="modal hidden">
            <div className="modal__content">
                <Link to="/">
                    <button className="modal__button--close">x</button>
                </Link>
                <img
                    className="modal__content-image"
                    alt={`${props.character.name}'s pic`}
                    src={props.character.imageUrl}
                ></img>
                <ul className="modal__content-info">
                    <li>{props.character.name}</li>
                    <li>{`Status: ${props.character.status}`}</li>
                    <li>{`Species: ${props.character.species}`}</li>
                    <li>{`Origin: ${props.character.origin.name}`}</li>
                    <li>{`Episodes: ${props.character.episodes.length}`}</li>
                </ul>
            </div>
        </div>
    );
}

export default CharacterDetail;
