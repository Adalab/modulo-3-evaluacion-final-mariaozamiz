import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/layout/characterList.scss';

function CharacterList(props) {
    if (props.characters.length === 0) {
        return (
            <div className="not-found__message">
                <p>Character not found, try again!</p>
            </div>
        );
    }

    const charactersInfo = props.characters
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((character) => {
            return (
                <li key={character.id} className="character-card">
                    <CharacterCard
                        id={character.id}
                        imageUrl={character.imageUrl}
                        name={character.name}
                        species={character.species}
                    />
                </li>
            );
        });
    return <ul className="character-list">{charactersInfo}</ul>;
}

export default CharacterList;
