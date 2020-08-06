import React, { useEffect, useState } from 'react';
import Header from './Header';
import CharacterList from './CharacterList';
import getDataFromApi from '../services/getDataFromApi';
import '../stylesheets/app.scss';

function App() {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        getDataFromApi().then((data) => {
            console.log(data);
            setCharacters(data);
        });
    });

    return (
        <div className="App">
            <Header />
            <CharacterList characters={characters} />
        </div>
    );
}

export default App;
