import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Filters from './components/filters/Filters';
import CharacterList from './components/characterList/CharacterList';
import CharacterDetail from './components/characterDetail/CharacterDetail';
import CharacterNotFound from './components/characterNotFound/CharacterNotFound';
import getDataFromApi from './services/getDataFromApi';
import './app.scss';

function App() {
    const [characters, setCharacters] = useState([]);
    const [filterName, setFilterName] = useState('');

    useEffect(() => {
        getDataFromApi().then((data) => {
            setCharacters(data);
        });
    }, []);

    const handleFilter = (filterObject) => {
        if (filterObject.kind === 'name') {
            setFilterName(filterObject.value);
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
        } else {
            return <CharacterNotFound />;
        }
    };

    return (
        <div className="App">
            <Header />
            <main className="main">
                <Filters handleFilter={handleFilter} filterName={filterName} />
                <CharacterList characters={filteredCharacters} />
                <Switch>
                    <Route
                        exact
                        path="/character/:id"
                        render={renderCharacterDetail}
                    />
                </Switch>
            </main>
        </div>
    );
}

export default App;
