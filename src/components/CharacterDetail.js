import React from 'react';
import { Link } from 'react-router-dom';
import close from '../images/window-close-solid.svg';
import Icon from './Icon';
import '../stylesheets/characterDetail.scss';

function CharacterDetail(props) {
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
                    <img
                        className="modal__content-image"
                        src={props.character.imageUrl}
                        alt={`${props.character.name}´s pic`}
                    ></img>
                    <ul className="modal__content-list">
                        <li className="modal__list-name">
                            {props.character.name}
                        </li>
                        <li>{`Status: ${props.character.status}`}</li>
                        <li>{`Species: ${props.character.species}`}</li>
                        <li>{`Origin: ${props.character.origin.name}`}</li>
                        <li>{`Episodes: ${props.character.episodes.length}`}</li>
                        <Icon
                            status={props.character.status}
                            species={props.character.species}
                        />
                    </ul>
                </div>
            </div>
            <div className="modal__overlay"></div>
        </div>
    );
}

export default CharacterDetail;
