import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterList() {
    return (
        <div className="character-list">
            Soy un listado de personajes
            <CharacterCard />
        </div>
    );
}

export default CharacterList;
