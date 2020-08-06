import React from 'react';
import Header from './Header';
import CharacterList from './CharacterList';
import '../stylesheets/app.scss';

function App() {
    return (
        <div className="App">
            Soy App
            <Header />
            <CharacterList />
        </div>
    );
}

export default App;
