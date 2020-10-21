import React from 'react';
import { Link } from 'react-router-dom';
import close from '../../images/window-close-solid.svg';
import Icon from '../iconsContainer/IconsContainer';
import './characterDetail.scss';

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
                    <div className="modal__content-image">
                        <img
                            className="image"
                            src={props.character.imageUrl}
                            alt={`${props.character.name}´s pic`}
                        ></img>
                    </div>
                    <div className="modal__content-info">
                        <ul className="modal__content-list">
                            <li className="modal__list-name">
                                {props.character.name}
                            </li>
                            <li>{`Status: ${props.character.status}`}</li>
                            <li>{`Species: ${props.character.species}`}</li>
                            <li>{`Origin: ${props.character.origin.name}`}</li>
                            <li>{`Episodes: ${props.character.episodes.length}`}</li>
                        </ul>
                        <div className="icons nav">
                            <Icon
                                status={props.character.status}
                                species={props.character.species}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal__overlay"></div>
        </div>
    );
}

export default CharacterDetail;
