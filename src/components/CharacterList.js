import React from 'react';
import CharacterCard from './CharacterCard';
import defaultImage from '../images/rick.jpg';
import '../stylesheets/characterList.scss';

function CharacterList() {
    return (
        <div className="character-list">
            <CharacterCard
                id={1}
                imageUrl={defaultImage}
                name="Rick"
                species="Human"
                origin="Planet Earth"
                status="Alive"
                episodes={6}
            />
        </div>
    );
}

export default CharacterList;
