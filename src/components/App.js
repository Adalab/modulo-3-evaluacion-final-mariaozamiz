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
    const [filterSpecies, setFilterSpecies] = useState([]);

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
