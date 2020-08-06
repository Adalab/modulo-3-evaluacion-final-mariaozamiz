import React from 'react';
import '../stylesheets/characterCard.scss';

function CharacterCard(props) {
    return (
        <div className="character-card">
            <img
                className="character-card__image"
                src={props.imageUrl}
                alt={`${props.name}'s pic`}
            ></img>
            <div className="character-card__info">
                <h1 className="character-card__name">{props.name}</h1>
                <h2 className="character-card__species">{props.species}</h2>
            </div>
        </div>
    );
}

export default CharacterCard;
