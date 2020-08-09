import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import getDataFromApi from '../services/getDataFromApi';
import CharacterNotFound from './CharacterNotFound';
import '../stylesheets/layout/app.scss';

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
            localStorage.setItem('search', filterObject.value);
        }
    };

    const filteredCharacters = characters.filter((character) => {
        return character.name.toUpperCase().includes(filterName.toUpperCase());
    });

    const renderCharacterDetail = (props) => {
        const characterId = props.match.params.id;
        const foundCharacter = characters.find((character) => {
            return character.id === parseInt(characterId);
        });
        if (foundCharacter !== undefined) {
            return <CharacterDetail character={foundCharacter} />;
        }
        const unfoundCharacter = characters.find((character) => {
            return character.id !== parseInt(characterId);
        });
        if (unfoundCharacter) {
            return <CharacterNotFound />;
        }
    };

    return (
        <div className="App">
            <Header />
            <Filters handleFilter={handleFilter} />
            <CharacterList characters={filteredCharacters} />
            <Switch>
                <Route
                    exact
                    path="/character/:id"
                    render={renderCharacterDetail}
                />
            </Switch>
        </div>
    );
}

export default App;
