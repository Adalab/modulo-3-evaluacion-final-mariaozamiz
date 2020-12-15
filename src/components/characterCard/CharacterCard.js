import React from 'react';
import { Link } from 'react-router-dom';
import './characterCard.scss';

function CharacterCard(props) {
    return (
        <>
            <Link
                to={`/character/${props.id}`}
                style={{ textDecoration: 'none' }}
            >
                <img
                    className="character-card__image"
                    src={props.imageUrl}
                    alt={`${props.name}'s pic`}
                    loading="eager"
                ></img>
                <div className="character-card__info">
                    <h1 className="character-card__name">{props.name}</h1>
                    <h2 className="character-card__species">{props.species}</h2>
                </div>
            </Link>
        </>
    );
}

export default CharacterCard;
