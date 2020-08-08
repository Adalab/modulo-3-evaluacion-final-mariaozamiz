import React from 'react';
import { Link } from 'react-router-dom';
import close from '../images/window-close-solid.svg';
import dead from '../images/skull-solid.svg';
import alive from '../images/heartbeat-solid.svg';
import unknown from '../images/question-circle-solid.svg';
import human from '../images/user-circle-solid.svg';
import alien from '../images/reddit-alien-brands.svg';
import '../stylesheets/characterDetail.scss';

function CharacterDetail(props) {
    const statusIcon = () => {
        if (props.status === 'Dead') {
            return dead;
        } else if (props.status === 'Alive') {
            return alive;
        } else {
            return unknown;
        }
    };

    const speciesIcon = () => {
        return props.species === 'Human' ? human : alien;
    };

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
                        alt={`${props.name}'s pic`}
                        src={props.imageUrl}
                    ></img>
                    <ul className="modal__content-list">
                        <li className="modal__list-name">{props.name}</li>
                        <li>
                            <h2>{`Status: ${props.status}`}</h2>
                            <img
                                className="status__icon"
                                src={statusIcon()}
                                alt="status icon"
                            ></img>
                        </li>
                        <li>
                            <h2>{`Species: ${props.species}`}</h2>
                            <img
                                className="species__icon"
                                src={speciesIcon()}
                                alt="species icon"
                            ></img>
                        </li>
                        <li>{`Origin: ${props.name}`}</li>
                        <li>{`Episodes: ${props.episodes}`}</li>
                    </ul>
                </div>
            </div>
            <div className="modal__overlay"></div>
        </div>
    );
}

export default CharacterDetail;
