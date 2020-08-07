import React, { useEffect, useState } from 'react';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import getDataFromApi from '../services/getDataFromApi';
import '../stylesheets/app.scss';

function App() {
    const [characters, setCharacters] = useState([]);
    const [filterName, setFilterName] = useState('');
    useEffect(() => {
        getDataFromApi().then((data) => {
            setCharacters(data);
        });
    }, []);

    const handleFilter = (filterObject) => {
        console.log('manejando los filtros:', filterObject);
        if (filterObject.kind === 'name') {
            setFilterName(filterObject.value);
        }
    };

    const filteredCharacters = characters.filter((character) => {
        return character.name.toUpperCase().includes(filterName.toUpperCase());
    });

    return (
        <div className="App">
            <Header />
            <Filters handleFilter={handleFilter} />
            <CharacterList characters={filteredCharacters} />
        </div>
    );
}

export default App;
