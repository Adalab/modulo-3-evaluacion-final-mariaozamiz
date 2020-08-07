import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/characterList.scss';

function CharacterList(props) {
    const charactersInfo = props.characters.map((character) => {
        return (
            <li key={character.id} className="character-card">
                <CharacterCard
                    id={character.id}
                    imageUrl={character.imageUrl}
                    name={character.name}
                    // species={character.species}
                    // origin={character.origin}
                    // status={character.status}
                    // episodes={character.episodes.length}
                />
            </li>
        );
    });
    return <ul className="character-list">{charactersInfo}</ul>;
}

export default CharacterList;
