import React, { useEffect, useState } from 'react';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import getDataFromApi from '../services/getDataFromApi';
import '../stylesheets/app.scss';

function App() {
    const [characters, setCharacters] = useState([]);
    const [filter, setFilter] = useState('');
    useEffect(() => {
        getDataFromApi().then((data) => {
            setCharacters(data);
        });
    }, []);

    const handleFilter = (filterObject) => {
        console.log('manejando los filtros:', filterObject);
        if (filterObject.kind === 'name') {
            setFilter(filterObject.value);
        }
    };

    return (
        <div className="App">
            <Header />
            <Filters handleFilter={handleFilter} />
            <CharacterList characters={characters} />
        </div>
    );
}

export default App;
